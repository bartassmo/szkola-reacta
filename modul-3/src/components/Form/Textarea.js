import React from "react";

import { colors } from './colors';

function Textarea({ bgColor, color='imperial', borderSize='1px', borderRadius='2px', borderColor='imperial' }) {

  const styles = {
    padding: '.75rem 1.25rem',
    border: `${borderSize} solid ${colors[borderColor]}`,
    borderRadius: `${borderRadius}`,
    backgroundColor: `${colors[bgColor]}`,
    color: `${colors[color]}`,
    lineHeight: 1,
    fontSize: 16,
    resize: 'none'
  }

  return (
    <>
    <textarea style={ styles } rows="1" />
    </>
  )
}

export default Textarea;