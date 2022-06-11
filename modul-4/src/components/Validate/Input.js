import React from "react";

import { colors } from "helpers/colors";

const Input = ({ label, id, name=id, errorMessage, isValid, type, innerRef, ...inputProps }) => {

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 2px',
    position: 'relative',
    check: {
      flexDirection: 'row-reverse',
      marginRight: 10,
      marginBottom: 0,
      alignItems: 'center'
    },
    label: {
      margin: (type === "radio" || type === "checkbox") ? '0 5px 0' : '0 0 5px',
      cursor: 'pointer',
    },
    input: {
      padding: type !== "radio" && '0.5rem 1rem',
      margin: 0,
      lineHeight: 1,
      resize: 'none',
      border: `1px solid ${colors.primary}`,
    },
  }

  return (
    <div style={(type === "radio" || type === "checkbox") ? { ...styles, ...styles.check } : styles }>
      <label htmlFor={id} style={ styles.label }>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          ref={innerRef}
          {...inputProps}
          style={ styles.input }
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          ref={innerRef}
          {...inputProps}
          style={ styles.input }
        />
      )}
    </div>
  );
};

export default Input;