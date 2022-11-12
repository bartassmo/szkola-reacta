import React from "react";
import { Link } from "react-router-dom";

const styles = {
  display: 'inline-flex',
  alignItems: 'center',
  icon: {
    fontSize: 14,
    width: 20,
    height: 20,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const DesktopNavItem = ({icon, title, path}) => {
  return (
    <li style={styles}>
      <span>{icon}</span>
      <Link to={path}>{title}</Link>
    </li>
  )
}

const MobileNavItem = ({icon, path}) => {
  return (
    <li style={styles}>
      <span>{icon}</span>
      <Link to={path}></Link>
    </li>
  )
}

export {DesktopNavItem, MobileNavItem};