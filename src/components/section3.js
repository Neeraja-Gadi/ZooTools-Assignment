import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const UserLeaderBoardCard = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false);

  // Sort the data in descending order of friendsInvited
  const sortedData = data.slice().sort((a, b) => b.friendsInvited - a.friendsInvited);

  // Display  only the top 4 databased on showAll state
  const visibleData = showAll ? sortedData : sortedData.slice(0, 3);

  return (
    <Card elevation={3} style={{ marginBottom: '20px' , boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',borderRadius: "10px"}}>
      <CardContent>
        <Typography variant="h6" style={{ marginBottom: '5px' }}>
          {title}
        </Typography>
        <Table >
          <TableHead >
            <TableRow>
              <TableCell style={{ fontSize: "12px"}}>Email</TableCell>
              <TableCell style={{ fontSize: "12px"}}align="center">Friends Invited</TableCell>

              <TableCell style={{ fontSize: "12px"}} align="center">Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.map((item,index) => (
              <TableRow key={index}>
                <TableCell style={{ fontSize: "12px"}}>{item.email}</TableCell>
                <TableCell style={{ fontSize: "12px"}} align="center">{item.friendsInvited}</TableCell>

                <TableCell style={{ fontSize: "12px"}} align="center">{item.Country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {sortedData.length > 3 && (
          <Button
            onClick={() => setShowAll(!showAll)}
            style={{
              marginTop: '10px',
              backgroundColor: '#eee',
              color: 'black',
              width: '25%',
              fontSize :"10px",
              fontWeight: "bold",
              borderRadius: "8px",

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



