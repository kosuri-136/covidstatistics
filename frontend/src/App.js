import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import TotalActive from './components/TotalActive';
import TotalDeath from './components/TotalDeath';
import HotspotStates from './components/HotspotStates';
import HealthyStates from './components/HealthyStates';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>

          <Route exact path="/" element={<Home />} />
          {/* <Route path="/totalRecovered" component={TotalRecovered} /> */}
          <Route path="/totalActive" element={<TotalActive />} />
          <Route path="/totalDeath" element={<TotalDeath />} />
          <Route path="/hotspotStates" element={<HotspotStates />} />
          <Route path="/healthyStates" element={<HealthyStates />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
