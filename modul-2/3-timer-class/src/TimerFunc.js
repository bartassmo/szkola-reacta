import { useState, useEffect } from 'react';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: 24,
  fontWeight: 700,
  width: '100%',
  text: {
    margin: 0,
    fontSize: 30,
  },
};

function TimerFunc() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div style={styles}>
      <h1 style={styles.text}>Komponent funkcyjny</h1>
      <h2 style={styles.text}>{counter}s</h2>
    </div>
  );
}

export default TimerFunc;
