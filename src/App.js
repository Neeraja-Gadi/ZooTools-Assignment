import React from 'react';
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Dashboard from './dashBoard';


const App = () => {
  return (

      <Routes>
        <Route path="/one" element={<Dashboard />} />
      </Routes>
  );
};

export default App;