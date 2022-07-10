import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from 'components/Header';
import UserDetails from 'components/UserDetails';
import Home from 'pages/Home';
import Users from './pages/Users';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
