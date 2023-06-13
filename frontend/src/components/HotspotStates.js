import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const HotspotStates = () => {
  const [totalHotspots, setTotalHotspots] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/hotspotStates');
      const json = await response.json();
      setTotalHotspots(json.data); // Update to json.data instead of json.data.rate
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <NavBar />
      <div className='card'>
        <h2>Total Hotspot States:</h2>
        {totalHotspots &&
          totalHotspots.map((stateData) => (
            <div key={stateData.state}>
              <p>State: {stateData.state}</p>
              <p>Hotspot Rate: {stateData.rate}</p> {/* Update to rate */}
            </div>
          ))}
      </div>
    </center>
  );
};

export default HotspotStates;
