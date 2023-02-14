import React, { useEffect, useState } from "react";
import "../App.css";
import db from "../db.json";
import { Consumer } from "../ContextApi";

export default function Continents() {
  const [isActive, setIsActive] = useState(Array);
  const [isContinentsActive, setIsContinentsActive] = useState(0);
  const [currentCountryId, setCurrentCountryId] = useState(0);

  const continents = [
    { continent: "Asia", isActive: false, countries: [] },
    { continent: "Europe", isActive: false, countries: [] },
    { continent: "Africa", isActive: false, countries: [] },
    { continent: "South America", isActive: false, countries: [] },
    { continent: "North America", isActive: false, countries: [] },
    { continent: "Oceania", isActive: false, countries: [] },
  ];

  let itemsInCart = db;
  useEffect(() => {
    if (isActive.length < 218) itemsInCart.map(() => isActive.push(false));
  }, [currentCountryId]);

  const getCountries = (countries, currentContinent, i) => {
    continents[i].countries = countries.filter((entry) =>
      entry.continent.some((continent) =>
        continent.includes(currentContinent.continent)
      )
    );
  };
  return (
    <div className="App-body">
      <Consumer>
        {(value) => {
          return (
            <div className="container">
              {continents.map((currentContinent, i) => (
                <div className="continentName">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-radius continent-Box"
                    id={i}
                    onClick={(e) => setIsContinentsActive(e.currentTarget.id)}
                  >
                    {getCountries(value, currentContinent, i)}
                    <div>{currentContinent.continent}</div>
                  </button>
                </div>
              ))}
              <div className="continentsList">
                <select
                  id="List"
                  onChange={(e) =>
                    setIsContinentsActive(document.getElementById("List").value)
                  }
                >
                  {continents.map((currentContinent, i) => (
                    <option value={i}>{currentContinent.continent}</option>
                  ))}
                </select>
              </div>
              <div className="container continent-Box">
                <div className="content-box">
                  <div className="Continent-Title ">
                    {continents[isContinentsActive].continent}
                  </div>
                  <div className="content-box btn-primary">
                    <div className="row">
                      {continents[isContinentsActive].countries.map(
                        (currentCountry) => (
                          <div
                            className="col-md-3"
                            key={currentCountry.id}
                            id="cardItem"
                          >
                            {currentCountry.name}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    </div>
  );
}
