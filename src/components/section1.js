import React  from 'react';
import { Card, CardContent, Typography,Tooltip  } from '@mui/material';
import { GoPeople } from 'react-icons/go'
import {daysData} from "../constrains/sampleData"


const Section1 = () => {
  const maxSignups = Math.max(...daysData.map(item => item.signups));
  const yAxisLines = 5; 

  return (
    <Card elevation={3} sx={{ marginBottom: '20px',boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',borderRadius: "10px" }}>
      <CardContent
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: '350px',
          padding: '15px ',
          overflow: 'hidden',
          position: 'relative',
          
        }}
      >
        <Typography
          variant="caption"
          style={{
            position: 'absolute',
            top: '25px',
            left: '25px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          100,000
          <GoPeople style={{ marginRight: '10px', padding: '10px' }} />
        </Typography>

        <Typography
          variant="caption"
          style={{
            position: 'absolute',
            top: '60px',
            left: '30px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            zIndex: 2,
          }}
        >
          <Typography variant="h6">Participants</Typography>
        </Typography>


        {[...Array(yAxisLines)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              
              borderBottom: '0.5px dotted #ebdddd', 
              position: 'absolute',
              bottom: `${(index / (yAxisLines - 1)) * 70}%`,
              zIndex: 1,
            }}
          />
        ))}

        {daysData.map(item => (
          <Tooltip
            key={item.date}
            title={
              <div
                style={{
                  borderRadius: '4px',
                }}
              >
                <Typography variant="body2">{item.signups} Signups</Typography>
                <Typography variant="body2">{item.date}</Typography>
              </div>
            }
            arrow
            placement="top"
          >
            <div
              style={{
                backgroundColor: '#f9bf18e8', 
                width: '18px',
                borderRadius: '15px',
                transition: 'height 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                cursor: 'pointer',
                marginBottom: '4px',
                position: 'relative',
                marginLeft: '1px',
                marginRight: '1px',
                height: `${(item.signups / maxSignups) * 70}%`,
               
                
              }}
            />
          </Tooltip>
        ))}
      </CardContent>
    </Card>
  );
};

export default Section1;

