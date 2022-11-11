import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import LoginContext from "data/LoginContext";
import LoginPage from "pages/LoginPage";
import ContentPage from "pages/ContentPage";
import PlacesPage from "pages/PlacesPage";
import MoviesPage from "pages/MoviesPage";


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <LoginContext.Provider value={{ authenticated, setAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={authenticated ? <ContentPage /> : <LoginPage />}/>
          <Route path="/places" element={authenticated ? <PlacesPage /> : <LoginPage />}/>
          <Route path="/movies" element={authenticated ? <MoviesPage /> : <LoginPage />}/>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
