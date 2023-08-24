import React from 'react';
import { Grid,Button, Card, CardContent,Typography } from '@mui/material';
import Section1 from './components/section1';
import Section2 from './components/section2';
import AnalyticsCard from './components/section4'; 
import SignUpLocationCard from "./components/section5" ;
import UserLeaderBoardCard from "./components/section3" ;
import {leaderBoardData,trafficData,countryData,behaviourData} from "./constrains/sampleData"


const buttonStyle = {
  backgroundColor: '#f7f2f2',
  color: 'black',
  fontSize: '12px',
  fontWeight: 'bold',
  borderRadius: '10px',
  padding: '5px 10px',
  marginRight: '5px',
};

const Dashboard = () => {
  return (
    <div style={{     paddingLeft :"30px", paddingRight:"30px" }}>
      <Grid container spacing={5} justifyContent="space-between" style={{ marginRight: '20px' }}>

        <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h2' fontWeight="bold" fontSize="20px" style={{ margin:'50px 0px 0px 10px' }}>
            Summer referral Competition
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Card style={{  margin:'50px 0px 0px 0px',backgroundColor: 'white', display: 'flex', alignItems: 'center', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
        <CardContent style={{padding:'7px' }}>
          <Button style={buttonStyle}>1H</Button>
          <Button style={buttonStyle}>24H</Button>
          <Button style={{ ...buttonStyle, backgroundColor: 'darkgrey' }}>30D</Button>
          <Button style={buttonStyle}>60D</Button>
        </CardContent>
      </Card>
        </Grid>

        {/* Section 1 */}
        <Grid item xs={12} style={{ marginBottom: '20px'}}>
          <Section1 />
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} style={{ marginBottom: '20px' }}>
          <Section2 />
        </Grid>
        {/* Section 3 */}
        <Grid item xs={12} md={6} style={{ marginBottom: '20px' }}>
          <UserLeaderBoardCard title="User leaderboard"  data={leaderBoardData} />
        </Grid>
        {/* Section 4 */}
        <Grid item xs={12} md={6} style={{ marginBottom: '20px' }} >
          <AnalyticsCard title="Traffic" sidetitle="Source"  showbutton= "See traffic sources " data={trafficData} />
        </Grid>
        {/* Section 5 */}
        <Grid item xs={12} md={6} style={{ marginBottom: '20px' }}>
          <SignUpLocationCard title="SignUp location" sidetitle="Country"  showbutton = 'See all countries' data={countryData} />
        </Grid>
        {/* Section 4/6*/}
        <Grid item xs={12} md={6} style={{ marginBottom: '20px' }}>
          <AnalyticsCard title="Behaviours" sidetitle="Browsers"  showbutton = 'See all behaviours' data={behaviourData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
