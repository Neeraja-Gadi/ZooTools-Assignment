import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Grid } from '@mui/material';

const UserLeaderBoardCard = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false);

  const sortedData = data.slice().sort((a, b) => b.friendsInvited - a.friendsInvited);

  const visibleData = showAll ? sortedData : sortedData.slice(0, 4);

  return (
    <Card elevation={3} style={{ marginBottom: '20px', borderRadius: '10px' }}>
      <CardContent>
        <Typography variant="h7" fontWeight="bold" style={{ marginBottom: '5px' }}>
          {title}
        </Typography>
        <Grid container spacing={0.5} paddingLeft="5px" paddingRight="5px" justifyContent={'space-between'}>
          <Grid item xs={3}>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontSize:{sm:12,xs:10},padding:"4px", border: 'none'}}>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visibleData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{fontSize:{sm:12,xs:10},paddingLeft:"5px" ,paddingRight:"5px", border: 'none'}}>{item.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={6}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontSize:{sm:12,xs:10},padding:"4px", border: 'none'}} align="center">Friends Invited</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visibleData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{fontSize:{sm:12,xs:10},paddingLeft:"5px" ,paddingRight:"5px", border: 'none'}}align="center">{item.friendsInvited}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={2} >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontSize:{sm:12,xs:10},padding:"4px", border: 'none'}} align="center">Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visibleData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{fontSize:{sm:12,xs:10},paddingLeft:"5px" ,paddingRight:"5px", border: 'none'}} align="center">{item.Country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        {sortedData.length > 4 && (
          <Button
            onClick={() => setShowAll(!showAll)}
            
            sx={{
              marginTop: '10px',
              backgroundColor: '#eee',
              color: 'black',
              width: '25%',
              fontSize:{sm:10,xs:8},
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            {showAll ? 'Show Less' : 'See Leaderboard'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default UserLeaderBoardCard; 