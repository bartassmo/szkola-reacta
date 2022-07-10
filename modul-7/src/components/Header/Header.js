import React from "react";

import { Link } from 'react-router-dom';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  marginBottom: 100,
  li: {
    margin: '0 15px',
    color: '#242424'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bold'
  }
}

function Header() {
  return (
    <nav>
      <ul style={styles}>
        <li style={styles.li}>
          <Link to ='/' style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to ='/users' style={styles.link}>Users</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;