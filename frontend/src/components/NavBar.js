import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
const NavBar = () => {
  return (
    <nav>
         <div style={{backgroundColor:"blue", fontSize:"larger"}}><h1>COVID STATISTICS </h1></div>
      <div className="navbar-container">
       
        <Link to="/" className="nav-link"><button style={{backgroundColor:"red", fontSize:"larger"}}>Total Recovered</button></Link>
        <Link to="/totalActive" className="nav-link"><button style={{backgroundColor:"red", fontSize:"larger"}}>Total Active</button></Link>
        <Link to="/totalDeath" className="nav-link"><button style={{backgroundColor:"red", fontSize:"larger"}}>Total Death</button></Link>
        <Link to="/hotspotStates" className="nav-link"><button style={{backgroundColor:"red", fontSize:"larger"}}>Hotspot States</button></Link>
        <Link to="/healthyStates" className="nav-link"><button style={{backgroundColor:"red", fontSize:"larger"}}>Healthy States</button></Link>
      </div>
    </nav>
  );
};

export default NavBar;
