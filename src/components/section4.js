import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const AnalyticsCard = ({ title, sidetitle, showbutton,data }) => {
  const [showAll, setShowAll] = useState(false);

    // eslint-disable-next-line no-unused-vars
  const visibleData = showAll ? data : data.slice(0, 7);
  const sortedData = data.slice().sort((a, b) => b.value - a.value);
  const maxValue = Math.max(...sortedData.map(item => item.value));

  return (
    <Card elevation={3} style={{ marginBottom: '20px' ,boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',borderRadius: "10px" }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={4}>
            <Typography variant="h7"  fontWeight="bold" style={{ display: 'inline-block', marginRight: '10px' }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              
              style={{ backgroundColor: 'lightgrey', color: 'black', fontSize: '8px' ,fontWeight:"bold"}}
            >
              {sidetitle}
            </Button>
            <Typography variant="body2" style={{ color: 'black', marginLeft: '20px'   }}>
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
                    height: '27px',
                    borderRadius: '5px',
                    backgroundColor: 'rgb(255 208 127 / 43%)', 
                    width: `${(item.value / maxValue) * 40}%`,
                    marginRight: '10px',
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: '12px',
                      color: 'black',
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      left: '5px',
                      padding:" 5px"
                    }}
                  >
                    {item.source}
                  </Typography>
                </div>
                <Typography variant="body2" style={{ color: 'black', minWidth: '40px' }}>
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
         <Button
         onClick={() => setShowAll(!showAll)}
         style={{
           marginTop: '10px',
           backgroundColor: '#eee',
           color: 'black',
           width: '30%',
           fontSize :"10px",
           fontWeight: "bold",
           borderRadius: "8px"
         }}
       >
         {showAll ? 'Show Less' : showbutton}
       </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
