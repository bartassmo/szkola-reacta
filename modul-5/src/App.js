import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Task1 from 'pages/Task1';
import Task2 from 'pages/Task2';
import Task4 from 'pages/Task4';
import UserProfile from 'components/UserProfile';

import NavMenu from 'components/NavMenu';

import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState({});

  const saveUser = (el) => {
    setUserProfile(el)
  }

  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Task1 />} />
          <Route path='/task2' element={<Task2 />} />
          <Route path='/users' element={<Task4 saveUser={saveUser} />} />
          <Route exact path='/user-profile' element={<UserProfile user={userProfile} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
