import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Trending from './Trending';
import Popular from './Popular';
import Discover from './Discover';
import './cards.css';

const RoutesContainer = () => {
  return (
 

    <Routes>
      <Route exact path="/Trending" element={<Trending />} />
      <Route exact path="/Popular" element={<Popular />} />
      <Route exact path="/Discover" element={<Discover />}/>
    </Routes>
  );
};

export default RoutesContainer;
