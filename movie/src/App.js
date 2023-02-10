import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from "./NavBar";
import { BrowserRouter, Routes } from "react-router-dom";
import RoutesContainer from "./Routes";
import LoadMore from "./LoadMore";

const Grid = () => {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <div className="row">

        <div className="col-12 bg-dark text-white top g-0 p-0.5">
          <NavBar/>

        </div>

        <div className=" bg-dark text-white p-5">
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

</BrowserRouter>
  );
};

export default Grid;
