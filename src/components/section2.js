import React from 'react';
import { Card, CardContent, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";

const Section2 = () => {
  return (
    <Card elevation={3} sx={{ marginBottom: '20px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: "10px" }}>
      <CardContent>
        <Typography variant="h4" fontWeight="bold" sx={{ margin: "20px" }}>ZooTools insights</Typography>
        <Typography variant="h6" sx={{ marginLeft: '20px' }}>Making analytics simple and actionable</Typography>

        <Grid container spacing={0.5}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginLeft: '20px' }}>Summary</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AiFillCaretDown style={{ color: 'white', backgroundColor: "#ff7f50", fontSize: '35px', borderRadius: "5px", padding: "1px" }} />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">Signups are slowing down. <span style={{ fontWeight: 'normal' }}>-5% newer than last week</span></Typography>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiFillCaretUp style={{ color: 'white', backgroundColor: "green", fontSize: '35px', borderRadius: "5px", padding: "1px" }} />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">80% <span style={{ fontWeight: 'normal' }}>of your signups were invited by other members</span></Typography>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HiOutlineLightBulb style={{ color: 'black', backgroundColor: "#fff44f", fontSize: '35px', borderRadius: "5px", padding: "1px" }} />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">80%  <span style={{ fontWeight: 'normal' }}>of your signups were invited by a friend</span></Typography>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HiOutlineLightBulb style={{ color: 'black', backgroundColor: "#fff44f", fontSize: '35px', borderRadius: "5px", padding: "1px" }} />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1" fontWeight="bold">80%  <span style={{ fontWeight: 'normal' }}>of your signups were invited by a friend</span></Typography>} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4} paddingRight={{ xs: '10px', md: '0px' }} paddingLeft={{ xs: '10px', md: '10px' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: '10px', paddingRight: { xs: '30px', md: '0px' },marginLeft: { xs: '20px', md: '0px' } }}>
              Recommendation
            </Typography>
            <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: '10px' , marginLeft: { xs: '20px', md: '0px' } }}>
              Make sure you promote and share your form
            </Typography>
            <Typography variant="body1" fontWeight="bold" sx={{ marginBottom: '10px' ,marginLeft: { xs: '20px', md: '0px' } }}>
              Congrats! This is huge. Keep giving rewards to your users.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Section2;
