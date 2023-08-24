import React from 'react';
import { Card, CardContent, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import {HiOutlineLightBulb} from "react-icons/hi"

const Section2 = () => {
  return (
    <Card elevation={3} sx={{ marginBottom: '20px',boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',borderRadius: "10px" }}>
      <CardContent>
      <Typography variant="h4"  fontWeight="bold" sx={{margin: "20px" }}>ZooTools insights</Typography>
      <Typography variant="h6" sx={{ marginLeft: '20px' }}>Making analytics simple and actionable</Typography>


        <Grid container spacing={0.5} >

          <Grid item xs={8}>
           
            <Typography variant="h6" fontWeight="bold" sx={{ marginLeft: '20px' }} >Summary</Typography>
            <List >
              <ListItem>
                <ListItemIcon>
                  <AiFillCaretDown style={{ color: 'white' , backgroundColor : "#ff7f50",fontSize: '35px' ,borderRadius: "5px" ,padding: "1px"}} />
                </ListItemIcon>                
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">signups are slowing down. <span style={{ fontWeight: 'normal' }}>-5% newer than last week</span></Typography>} /> 
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiFillCaretUp style={{ color: 'white' , backgroundColor : "green",fontSize: '35px' ,borderRadius: "5px" ,padding: "1px"  }} />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">80% <span style={{ fontWeight: 'normal' }}>of your signup's were inivted by other members</span></Typography>} /> 
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HiOutlineLightBulb style={{ color: 'black'  , backgroundColor : "#fff44f" ,fontSize: '35px' ,borderRadius: "5px" ,padding: "1px" }} />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">80%  <span style={{ fontWeight: 'normal' }}>of your signup's were inivted by friend</span></Typography>} /> 
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HiOutlineLightBulb style={{ color: 'black'  , backgroundColor : "#fff44f"  ,fontSize: '35px' ,borderRadius: "5px" ,padding: "1px"  }} />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">80%  <span style={{ fontWeight: 'normal' }}>of your signup's were inivted by friend</span></Typography>} /> 
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4} paddingRight={10} paddingLeft={10}>
            <Typography variant="h6"fontWeight="bold" sx={{ marginBottom: '10px' ,paddingRight : "30px" }}>
              Recommendations:
            </Typography>
            <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: '10px' }}>
              Make sure you promote and share your form
            </Typography>
            <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: '10px' }}>
              congrats! This is huge.Keep giving rewards for your user
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Section2;
