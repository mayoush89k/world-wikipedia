import React, { useEffect, useState } from "react";
import "../App.css";
import { Consumer } from "../ContextApi";

export default function Cities() {
  const [isActive, setIsActive] = useState(Array);
  const [currentCountryId, setCurrentCountryId] = useState(0);

  useEffect(() => {
    if (currentCountryId) {
      document.getElementById(`city${currentCountryId}`).style.display =
        isActive[currentCountryId] ? "block" : "none";
    }
  }, [currentCountryId]);

  const handleClick = (id) => {
    setCurrentCountryId(id);
    isActive[id] = !isActive[id];

    document.getElementById(`${id}`).className = isActive[id]
      ? "selectedCountry"
      : "country";

    document.getElementById(`city${id}`).style.display = isActive[id]
      ? "block"
      : "none";
    if (currentCountryId != id && isActive[currentCountryId]) {
      isActive[currentCountryId] = !isActive[currentCountryId];
      document.getElementById(`city${currentCountryId}`).style.display =
        isActive[currentCountryId] ? "block" : "none";

      document.getElementById(`${currentCountryId}`).className = isActive[
        currentCountryId
      ]
        ? "selectedCountry"
        : "country";
    }
  };

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
                    className="col-md-4"
                  >
                    <div className="content countryBox">
                      <button
                        className="header country"
                        id={i}
                        onClick={(e) => {
                          document.getElementById(i).className =
                            "selectedCountry";
                          handleClick(e.currentTarget.id);
                        }}
                      >
                        {currentCountry.name}
                      </button>
                      <div id={`city${i}`} style={{ display: "none" }}>
                        <div
                          id={
                            currentCountry.cities.length > 10
                              ? "city2Col"
                              : "city1Col"
                          }
                          className="cityBox"
                        >
                          {currentCountry.cities.length > 1 ? (
                            <div className="container cityBoxBorder">
                              <div className="row">
                                {currentCountry.cities.map((city, index) => (
                                  <div
                                    key={currentCountry.id}
                                    id="cardItem"
                                    className={
                                      currentCountry.cities.length > 10
                                        ? "col-md-4"
                                        : "col-md-6"
                                    }
                                  >
                                    <div className="city">
                                      {index + 1}. {city}
                                    </div>
                                  </div>
                                ))}
                                <a
                                  className="link-info moreLink"
                                  href={`https://en.wikipedia.org/wiki/List_of_cities_in_${currentCountry.name}`}
                                  target="_blank"
                                >
                                  for more...
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <a
                                target={"new Blank"}
                                href={`https://en.wikipedia.org/wiki/List_of_cities_in_${currentCountry.name}`}
                              >
                                {currentCountry.name}
                              </a>{" "}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
