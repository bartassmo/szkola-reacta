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
        <li style={styles.li}>
          <Link to ='/campaigns' style={styles.link}>Campaigns</Link>
        </li>
        <li style={styles.li}>
          <Link to ='/campaigns/add-campaign' style={styles.link}>Add Campaign</Link>
        </li>
        <li style={styles.li}>
          <Link to ='/subscribers' style={styles.link}>Subscribers</Link>
        </li>
        <li style={styles.li}>
          <Link to ='/subscribers/add-subscriber' style={styles.link}>Add Subscriber</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;