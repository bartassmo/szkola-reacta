import React from "react";

function Menu({ children }) {

  const styles = {
    display: 'inline-flex',
    flexDirection: 'row',
    fontSize: 18,
    listStyleType: 'none',
    margin: '0 -.75rem',
    padding: 0
  }

  return (
    <>
    <ul style={ styles }>
      { children }
    </ul>
    </>
  )
}

export default Menu;