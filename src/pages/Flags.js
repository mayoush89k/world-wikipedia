import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Consumer } from "../ContextApi";

export default function Flags(params) {

  return (
    <div className="App-body">
      <Consumer>
        {(value) => {
          return (
            <div className="container">
              <div className="row">
                {value.map((currentCountry, i) => (
                  <div
                    key={currentCountry.id}
                    id="cardItem"
                    className="col-md-2"
                  >
                    <Link
                      to={`/${currentCountry.name}`}
                      className="container"
                      onClick={() => params.getCurrentCountry(currentCountry)}
                    >
                      <div className="image">
                        <img
                          className="flag"
                          alt={currentCountry.name}
                          src={require(`../images/${currentCountry.image}`)}
                        />
                      </div>
                      <div className="content">
                        <div className="header">{currentCountry.name}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    </div>
  );
}
