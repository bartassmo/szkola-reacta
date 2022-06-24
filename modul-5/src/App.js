import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Task1 from 'pages/Task1';
import Task2 from 'pages/Task2';
import Task4 from 'pages/Task4';
import Task5 from 'pages/Task5';

import NavMenu from 'components/NavMenu';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Task1 />}></Route>
          <Route path='/task2' element={<Task2 />}></Route>
          <Route path='/task4' element={<Task4 />}></Route>
          <Route path='/task5' element={<Task5 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
