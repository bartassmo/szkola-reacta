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
import Navbar from "components/Navbar";


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ authenticated, setAuthenticated }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={authenticated ? <ContentPage /> : <LoginPage />}/>
            <Route path="/places" element={authenticated ? <PlacesPage /> : <LoginPage />}/>
            <Route path="/movies" element={authenticated ? <MoviesPage /> : <LoginPage />}/>
          </Routes>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
