import React from "react";
import { Link } from "react-router-dom";

const styles = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: 16,
  marginBottom: 5,
  text: {
    textDecoration: 'none',
    color: '#242424',
  },
  icon: {
    fontSize: 14,
    width: 20,
    height: 20,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
    marginRight: 10
  },
  mobile: {
    fontSize: 20,
  },
  mobileIcon: {
    fontSize: 22,
    width: 26,
    height: 26,
    marginRight: 0
  }
}

const DesktopNavItem = ({icon, title, path}) => {
  return (
    <li style={styles}>
      <Link to={path} style={styles.text}><span style={styles.icon}>{icon}</span>{title}</Link>
    </li>
  )
}

const MobileNavItem = ({icon, path}) => {
  return (
    <li style={{ ...styles, ...styles.mobile }}>
      <Link to={path} style={styles.text}><span style={styles.mobileIcon}>{icon}</span></Link>
    </li>
  )
}

export {DesktopNavItem, MobileNavItem};