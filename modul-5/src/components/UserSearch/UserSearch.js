import React, { useRef } from "react";

import Button from "components/Button";

import { colors } from "helpers/colors";

const styles = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '0 auto',
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  label: {
    marginBottom: 5
  },
  input: {
    border: `1px solid ${colors.primary}`,
    padding: '.25rem .75rem',
    lineHeight: 1,
    fontSize: 15,
    marginRight: 5
  }
}



const UserSearch = ({ onKeyDown, setValue }) => {
  const input = useRef(null);

  const handleClick = (e) => {
    setValue(null);
    input.current.value = null;
  }
  return (
    <div style={ styles }>
      <label style={ styles.label } htmlFor="name-input">Szukane imię</label>
      <div style={ styles.wrapper}>
        <input
          type="text"
          id="name-input"
          name="name"
          placeholder="Podaj szukane imię"
          ref={ input }
          style={ styles.input }
          onKeyDown={ onKeyDown }
        />
        <Button style={ styles.close } label="Od nowa!" onClick={ handleClick } />
      </div>
    </div>
  )
}

export default UserSearch;