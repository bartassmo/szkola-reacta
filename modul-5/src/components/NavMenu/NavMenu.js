import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { colors } from "helpers/colors";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    boxShadow: `0 0 15px 5px ${colors.primary}`,
    transition: 'all .2s ease-in-out',
    transform: (isOpen ? 'translateX(0)' : 'translateX(-150%)'),
    list: {
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      margin: 0,
      padding: '3.5rem 4rem',
      alignItems: 'flex-start'
    },
    item: {
      textDecoration: 'none',
      color: colors.primary,
      fontSize: 19,
      marginBottom: '.5rem',
      display: 'inline-block',
      lineHeight: 1.1
    },
    active: {
      borderBottom: `2px solid ${colors.error}`
    },
    button: {
      width: 40,
      height: 40,
      backgroundColor: colors.info,
      position: 'absolute',
      right: 0,
      top: 0,
      transform: 'translate(-50%, 50%)',
      display: 'inline-flex',
      alignItems: 'center',
      fill: colors.secondary,
      cursor: 'pointer'
    },
    close: {
      width: 25,
      height: 25,
      backgroundColor: colors.info,
      position: 'absolute',
      right: 0,
      top: 0,
      transform: 'translate(-50%, 50%)',
      cursor: 'pointer',
      color: colors.secondary,
      display: 'inline-flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'center',
      fontSize: 18
    }
  }

  const checkIsActive = ({ isActive }) => {
    return isActive ? { ...styles.item, ...styles.active } : styles.item;
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav style={ styles }>
        <button style={ styles.close } onClick={handleToggle}>x</button>
        <ul style={ styles.list }>
          <li>
            <NavLink style={ checkIsActive } to="/">Task 1 - Dialog</NavLink>
          </li>
          <li>
            <NavLink style={ checkIsActive } to="/task2">Task 2 - Snackbar</NavLink>
          </li>
          <li>
            <NavLink style={ checkIsActive } to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink style={ checkIsActive } to="/user-profile">User profile</NavLink>
          </li>
        </ul>
      </nav>
      <button style={ styles.button } onClick={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
      </button>
    </>
  );
}

export default NavMenu;