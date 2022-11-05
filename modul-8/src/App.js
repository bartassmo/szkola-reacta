import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import LoginContext from "components/LoginContext";
import LoginPage from "pages/LoginPage";
import ContentPage from "pages/ContentPage";


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <LoginContext.Provider value={{ authenticated, setAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={authenticated ? <ContentPage /> : <LoginPage />}/>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
