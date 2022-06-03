import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { colors } from 'helpers/colors';

function Button({ bgColor='bleu', color='amour', icon, children  }) {

  const styles = {
    padding: '.5rem 1.25rem',
    border: 0,
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '5rem',
    fontSize: 16,
    backgroundColor: `${colors[bgColor]}`,
    color: `${colors[color]}`,
    cursor: 'not-allowed'
  }

  return (
    <>
      <button style={ styles }>
        <FontAwesomeIcon icon={icon === "user" ? faUser : null} />
        <span>{ children }</span>
      </button>
    </>
  )
}

export default Button;