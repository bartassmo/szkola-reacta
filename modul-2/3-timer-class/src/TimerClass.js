import React from 'react';

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

class TimerClass extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.counter);
  }

  render() {
    const { counter } = this.state;

    return (
      <div style={styles}>
        <h1 style={styles.text}>Komponent klasowy</h1>
        <h2 style={styles.text}>{counter}s</h2>
      </div>
    );
  }
}

export default TimerClass;
