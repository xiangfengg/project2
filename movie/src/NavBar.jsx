import React from 'react';
import { Link, Router, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./App.css"

const NavBar = () => {
  const location = useLocation();

  return (     
          <>

{/* <nav class="navbar navbar-expand-lg bg-body-tertiary"> */}

  <nav className="navbar bg-dark" >
  <form className="container-fluid justify-content-start">




  <button className={location.pathname === "/Popular" ? "btn btn-sm btn-outline -warning me-5" : "btn btn-sm btn-outline-light me-5"} type="button">

      <Link style={{color: location.pathname === "/Popular" ? "#ffd700" : "#fff"}}to="/Popular">Popular</Link>
    </button>


  <button className={location.pathname === "/Trending" ? "btn btn-sm btn-outline -warning me-5" : "btn btn-sm btn-outline-light me-5"} type="button">

      <Link style={{color: location.pathname === "/Trending" ? "#ffd700" : "#fff"}}to="/Trending">Trending</Link>
    </button>


  <button className={location.pathname === "/Discover" ? "btn btn-sm btn-outline -warning me-5" : "btn btn-sm btn-outline-light me-5"} type="button">

    <Link style={{color: location.pathname === "/Discover" ? "#ffd700" : "#fff"}}to="/Discover">Discover</Link>
</button>



  </form>
</nav>  
      </>

  );
};

export default NavBar;
