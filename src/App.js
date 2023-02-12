import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "./Routes";

import Search from "./Search";




const Grid = () => {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <div className="d-flex flex-column">
      <div className="row">


        <div className=" bg-dark text-white">
         <NavBar/>
        </div>

        <div className=" bg-dark text-white">
       column 2
        </div>  

        <div className=" bg-dark text-white">

       <RoutesContainer/>

        </div>  
        <div className=" bg-dark text-white">
       column 4
        </div>  
      

</div>
</div>
      </div>


</BrowserRouter>

  );
};

export default Grid;
