import React from 'react';
import { v4 } from 'uuid';
import './App.css';

const styles = {
  width: '100vw',
  fontSize: 20,
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

function App() {
  const uuidv4 = v4();

  return <div style={styles}>{uuidv4}</div>;
}

export default App;
