import React from "react";
import "../App.css";
import previous from "../images/arrow.gif";
import { Link } from "react-router-dom";

export default function Country(param) {
  let Country = param.Country;
  return (
    <div className="App-body">
      <div className="flexed">
        <Link to="/FlagsList">
          <img
            src={previous}
            alt="back to Flag Lists"
            className="previous"
          />
        </Link>
        <img
          className="countryFlag"
          alt={Country.name}
          src={require(`../images/${Country.image}`)}
        />
        <div style={{ textAlign: "left", margin: "20px" }}>
          Name: {Country.name} <br />
          Capital: {Country.capital} <br />
          Continent: {Country.continent} <br />
        </div>
      </div>
      <div>
        <div className="cityListBox">
          <div className="container cityBoxBorder">
            <div className="row">
              {Country.cities.map((city) => (
                  <div key={Country.id} id="cardItem" className={"col-md-6"}>
                    <div className="city">
                  <a
                    target="new blank"
                    href={`https://en.wikipedia.org/wiki/${city}`}
                  >
                    <li>{city}</li>
                  </a>
                </div>
                </div>
              ))}
              <a
                className="link moreLink"
                href={`https://en.wikipedia.org/wiki/List_of_cities_in_${Country.name}`}
                target="_blank"
              >
                List of Cities...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
