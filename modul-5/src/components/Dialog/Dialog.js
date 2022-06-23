import React from "react";

import Button from "components/Button";

import { colors } from "helpers/colors";


const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(24, 24, 24, .75)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  modal: {
    backgroundColor: colors.secondary,
    width: '66vw',
    maxHeight: '66hh',
    position: 'relative',
    textAlign: 'center',
    padding: 15
  },
  title: {
    fontSize: 20,
    margin: '0 0 10px',
    lineHeight: 1,
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
    transform: 'translate(-50%, 50%)',
    margin: 0,
    padding: 0,
    fontSize: 24,
    lineHeight: 0.5,
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },
  buttonWrapper: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: '0 10px',
    cursor: 'pointer',
    padding: '.5rem 1rem',
    border: 0
  },
  confirm: {
    backgroundColor: colors.green
  },
  abort: {
    backgroundColor: colors.red
  }
}

const Dialog = ({ title = 'Tytuł modala', text = 'Krótki tekst, opis modala', close, confirm, abort }) => {
  return (
    <div style={ styles }>
      <div style={ styles.modal }>
        <Button style={ styles.close } label="x" onClick={ close } />
        <h1 style={ styles.title }>{ title }</h1>
        <p style={ styles.text}>{ text }</p>
        <div style={ styles.buttonWrapper }>
          <Button style={{ ...styles.button, ...styles.confirm  }} label="Confirm" onClick={ confirm } />
          <Button style={{ ...styles.button, ...styles.abort }} label="Abort" onClick={ abort } />
        </div>
      </div>
    </div>
  )
}

export default Dialog;