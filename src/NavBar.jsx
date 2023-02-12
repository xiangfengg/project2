import React ,{useState}from 'react';
import { Link, useLocation} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Search from './Search';

import "./App.css"

const NavBar = () => {
  const location = useLocation();
  const[ searchTerm, setSearchTerm]=useState('')


  return (     
          <>



  <nav className="navbar bg-dark d-flex flex-row m-0 p-0" >
    <div className="row row-cols-auto">

MovieWebpage 




  <button className={location.pathname === "/Popular" ? "btn btn-sm btn-outline -warning px-4 m-3" : "btn btn-sm btn-outline-light px-4 m-3"} type="button">

      <Link style={{color: location.pathname === "/Popular" ? "#ffd700" : "#fff"}}to="/Popular">Popular</Link>
    </button>


  <button className={location.pathname === "/Trending" ? "btn btn-sm btn-outline -warning px-4 m-3" : "btn btn-sm btn-outline-light px-4 m-3"} type="button">

      <Link style={{color: location.pathname === "/Trending" ? "#ffd700" : "#fff"}}to="/Trending">Trending</Link>
    </button>


  <button className={location.pathname === "/Discover" ? "btn btn-sm btn-outline -warning px-4 m-3" : "btn btn-sm btn-outline-light px-4 m-3"} type="button">

    <Link style={{color: location.pathname === "/Discover" ? "#ffd700" : "#fff"}}to="/Discover">Discover</Link>
</button>

</div>


<form className="d-flex btn-sm btn-outline -warning" role="search"  >
<input 
        className="form-control me-2"
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}/>

        
         <div className="btn btn-outline-warning me-4" 
         onClick={() => setSearchTerm(searchTerm)}>Search</div>
 
</form> 
<h1>hello</h1>
<Search value={searchTerm}/>
 </nav>   
   </>

  );
};

export default NavBar;
