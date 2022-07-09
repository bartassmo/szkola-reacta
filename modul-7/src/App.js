import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from 'components/Header';
import UserList from 'components/UserList';



import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home </h1> } />
        <Route path="users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
