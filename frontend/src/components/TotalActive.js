import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const TotalActive = () => {
  const [totalActive, setTotalActive] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/totalActive');
      const json = await response.json();
      setTotalActive(json.data.active);
    } catch (error) {
      console.log(error);
    }
  };

  return (<>
  <center>


    <NavBar />
    <div className='card'>
      <h2>TotalActive: {totalActive}</h2>
    </div>
    </center>
 </> );
};

export default TotalActive;
