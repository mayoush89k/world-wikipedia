import React from "react";
import "../App.css";
import { Consumer } from "../ContextApi";

export default function Capitals() {
    let id = 0;
    
  return (
    <div className="App-body">
      <Consumer>
        {(value) => {
          return (
            <div >
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr className="capitals">
                    <th scope="col">ID</th>
                    <th scope="col">Country</th>
                    <th scope="col">Capital</th>
                    <th scope="col">Continent</th>
                  </tr>
                </thead>
                <tr></tr>
                {value.map((currentCountry) => (
                  <tr className="capitals">
                    <th scope="row">{(id = id + 1)}</th>
                    <td>{currentCountry.name} </td>
                    <td>{currentCountry.capital}</td>
                    <td>{currentCountry.continent}</td>
                  </tr>
                ))}
              </table>
            </div>
          );
        }}
      </Consumer>
    </div>
  );
}
