import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const TotalDeath = () => {
  const [totalDeath, setTotalDeath] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/totalDeath');
      const json = await response.json();
      setTotalDeath(json.data.death);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>

   
    <NavBar />
    <div className='card'>
      <h2>Total Death: {totalDeath}</h2>
    </div>
    </center>
  );
};

export default TotalDeath;
