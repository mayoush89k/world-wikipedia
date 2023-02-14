// import '../App.css';
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {Link}  from "react-router-dom";
import Flags  from "../images/flags.gif";
import Cities  from "../images/city.gif";
import Continents  from "../images/continents.gif";
import Capitals from "../images/capital.gif";
import '../App.css'

export default function HomePage(params) {
  return (
    <div className="App-body">
      <div className="flexed">
        <Link to="/FlagsList">
          <img src={Flags}
          className="homepage"
          alt="Flags List"/>
          <h5>Flags List</h5>
        </Link>
        <Link to="/CitiesList">
          <img src={Cities}
          className="homepage"
          alt="Cities List"/>
          <h5>Cities List</h5>
        </Link>
        <Link to="/CapitalsList">
          <img src={Capitals}
          className="homepage"
          alt="Capitals List"/>
          <h5>Capitals List</h5>
        </Link>
        <Link to="/ContinentsList">
          <img src={Continents}
          className="homepage"
          alt="Continents List"/>
          <h5>Continents List</h5>
        </Link>
      </div>
    </div>
  );
}
