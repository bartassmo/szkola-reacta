import React from "react";

import { colors } from "helpers/colors";

const styles = {
  textAlign: 'center',
  padding: '.75rem 1rem',
  width: 'fit-content',
  lineHeight: '1',
  backgroundColor: colors.blue,
  border: `1px solid ${colors.blue}`,
  color: colors.primary,
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  margin: '0 auto',
  display: 'inherit'
}

const Button = React.forwardRef(({ mouseOver, mouseLeave }, ref) => {
  return (
    <button type="submit" ref={ ref } onMouseOver={ mouseOver } onMouseLeave={ mouseLeave } style={ styles }>Testowy button</button>
  )
});

export default Button;