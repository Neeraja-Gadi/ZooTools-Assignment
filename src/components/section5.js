import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';

const SignUpLocationCard = ({ title, sidetitle, data }) => {
  const [showAll, setShowAll] = useState(false);
  
  // eslint-disable-next-line no-unused-vars
  const visibleData = showAll ? data : data.slice(0, 5);
  const sortedData = data.slice().sort((a, b) => b.value - a.value);
  const maxValue = Math.max(...sortedData.map(item => item.value));

  const [countryCodes, setCountryCodes] = useState({});

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const codes = {};
        data.forEach(country => {
          if (country.name.common) {
            codes[country.name.common] = country.cca2.toLowerCase();
          }
        });
        setCountryCodes(codes);
      });
  }, []);

  return (
    <Card elevation={3} style={{ marginBottom: '20px' ,boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',borderRadius: "10px"}}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={4}>
            <Typography variant="h6" style={{ display: 'inline-block', marginRight: '10px' }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              style={{ backgroundColor: 'lightgrey', color: 'black', fontSize: '10px' ,fontWeight:"bold" }}
            >
              {sidetitle}
            </Button>
            <Typography variant="body2" style={{ color: 'black', marginLeft: '20px' }}>
              City
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {sortedData.map(item => (
              <div key={item.city} style={{ marginTop: '10px', display: 'flex', justifyContent:'space-between' }}>
                <div
                  style={{
                    height: '25px', 
                    borderRadius: '5px', 
                    backgroundColor: '#fadfad',
                    width: `${(item.value / maxValue) * 40}%`,
                    marginRight: '10px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    padding:"0 5px"
                  }}
                >
                  {item.country === 'Others' ? (
                    <span
                      style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                      }}
                    >
                      🌍
                    </span>
                  ) : (
                    <ReactCountryFlag
                      countryCode={countryCodes[item.country]}
                      svg
                      style={{ width: '20px', height: '20px', marginLeft: '5px' }} 
                    />
                  )}
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: '16px',
                      color: 'black',
                      marginLeft: '5px',
                      flex: 1,
                    }}
                  >
                    {item.country}
                  </Typography>
                </div>
                <Typography variant="body2" style={{ color: "black" , minWidth: '40px' }}>
                  {item.city}
                </Typography>
                <Typography variant="body2" style={{ color: 'black', minWidth: '40px' }}>
                  {item.value}
                </Typography>
              </div>
            ))}
          </Grid>
        </Grid>
        {data.length > 5 && (
          <Button onClick={() => setShowAll(!showAll)}
          style={{
            marginTop: '10px',
            backgroundColor: '#eee',
            color: 'black',
            width: '25%',
            fontSize :"10px",
            fontWeight: "bold",
            borderRadius: "8px"
          }}>
            {showAll ? 'Show Less' : 'See all countries'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default SignUpLocationCard;
