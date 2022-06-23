import React from "react";

import { colors } from "helpers/colors";

const styles = {
  backgroundColor: 'transparent',
  border: `1px solid ${colors.primary}`,
  cursor: 'pointer',
  padding: '.25rem .75rem'
}

const Button = ({ label, style=styles, onClick, disabled=null }) => {
  return (
    <button style={ style } disabled={ disabled } onClick={ onClick }>{label}</button>
  )
}

export default Button;