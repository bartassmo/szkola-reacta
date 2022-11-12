import React from "react";
import UseMobile from "components/UseMobile";
import { FaBeer } from 'react-icons/fa';
import { AiFillAccountBook, AiFillBook } from "react-icons/ai";

import { MobileNavItem, DesktopNavItem } from "components/NavItem/NavItem";

const style = {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fafafa',
  width: '10vw',
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: 16,
    margin: 0,
    padding: 0,
  }

}


const Navbar = () => {
  UseMobile();
  return (
    <nav style={style}>
      <ul style={style.list}>
        {/* {UseMobile ? <MobileNavItem icon={AiFillBook} path='/'  /> : <DesktopNavItem title="Test" icon={FaBeer} path='/' />} */}
        <li>
          <h1>{AiFillBook}</h1>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;