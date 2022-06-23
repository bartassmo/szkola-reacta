import React, { useEffect } from "react";

import Button from "components/Button";

import { colors } from "helpers/colors";

const Snackbar = ({ text = 'Snackbar', close, positionX = 'left', positionY = 'bottom', type = 'success', timeout, setVisible }) => {
  const styles = {
    backgroundColor: colors.secondary,
    width: 'fit-content',
    position: 'absolute',
    textAlign: 'center',
    padding: '10px 25px',
    [positionX]: 15,
    [positionY]: 15,
    fontFamily: type,
    [type]: {
      backgroundColor: colors[type],
      color: colors.secondary
    },
    text: {
      fontSize: 16,
      margin: '0 auto',
      maxWidth: '75%'
    },
    close: {
      position: 'absolute',
      right: 0,
      top: 0,
      transform: 'translate(30%, -60%)',
      margin: 0,
      padding: 0,
      fontSize: 18,
      lineHeight: 0.5,
      width: 20,
      height: 20,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `1px solid ${colors.primary}`,
      backgroundColor: 'transparent',
      cursor: 'pointer'
    }
  }

  useEffect(() => {
    const count = setTimeout(() => {
      setVisible(true);
    }, timeout);

    return () => clearTimeout(count);
  }, [setVisible, timeout]);

  return (
    <div style={{ ...styles, ...styles[type] }}>
      <Button style={ styles.close } label="x" onClick={ close } />
      <span style={ styles.text}>{ text }</span>
    </div>
  )
}

export default Snackbar;