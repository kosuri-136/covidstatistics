import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const HealthyStates = () => {
  const [totalHealthyStates, setTotalHealthyStates] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/healthyStates');
      const json = await response.json();
      setTotalHealthyStates(json.data); // Update to json.data instead of json.data.morality
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>

        <NavBar />
        <div className='card'>
        <h2>Total Healthy States:</h2>
        {totalHealthyStates &&
          totalHealthyStates.map((stateData) => (
            <div key={stateData.state}>
              <p>State: {stateData.state}</p>
              <p>Mortality Rate: {stateData.mortality}</p> {/* Update to mortality */}
            </div>
          ))}
      </div>
    </center>
  );
};

export default HealthyStates;
