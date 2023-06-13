import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
const Home = () => {
  const [totalRecovered, setTotalRecovered] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/totalRecovered');
      const json = await response.json();
      setTotalRecovered(json.data.recovered);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <center>

   
    <NavBar />
    <div className='card'>
      <h2>Total Recovered: {totalRecovered}</h2>
    </div>
    </center>
  );
};

export default Home;
