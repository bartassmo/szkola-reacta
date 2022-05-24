import './App.css';
import TimerFunc from './TimerFunc';
import TimerClass from './TimerClass';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
};

function App() {
  return (
    <div className="App" style={styles}>
      <TimerFunc />
      <TimerClass />
    </div>
  );
}

export default App;
