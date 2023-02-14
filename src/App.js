import "./App.css";
import React, { useEffect, useState } from 'react';
import db from "./db.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Title from "./pages/Title";
import Menu from "./pages/Menu";
import Flags from "./pages/Flags";
import Cities from "./pages/Cities";
import Capitals from "./pages/Capitals";
import Continents from "./pages/Continents";
import Country from "./pages/Country";
import { Provider } from "./ContextApi";

function App() {
  let countryName;
  const [cCountry , setCurrentCountry ] = useState(db[0]);

  const getCurrentCountry = (country) => {
    setCurrentCountry(country);
    countryName = cCountry.name;
  }

  return (
    <div className="App">
      <Provider value={db}>
        <Router>
          <Menu />
          <Title />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/FlagsList"
              element={<Flags pageName="Flags List" getCurrentCountry={getCurrentCountry}/>}
            />
            <Route
              exact
              path="/CitiesList"
              element={<Cities pageName="Cities List" />}
            />
            <Route
              exact
              path="/CapitalsList"
              element={<Capitals pageName="Capitals List" />}
            />
            <Route
              exact
              path="/ContinentsList"
              element={<Continents pageName="Continents List" />}
            />
            <Route
              exact
              path= '/:contryName'
              element={<Country Country={cCountry} />}
            />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
