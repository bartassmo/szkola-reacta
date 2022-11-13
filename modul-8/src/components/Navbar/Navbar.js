import React from "react";
import UseMobile from "components/UseMobile";
import { FaVideo, FaPlane  } from 'react-icons/fa';

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
        {UseMobile() ? (
            <MobileNavItem icon={<FaPlane/>} path='/places'  />
          ) : (
            <DesktopNavItem title="Miejsca" icon={<FaPlane/>} path='/places' />
          )
        }
        {UseMobile() ? <MobileNavItem icon={<FaVideo/>} path='/movies'  /> : <DesktopNavItem title="Filmy" icon={<FaVideo/>} path='/movies' />}
      </ul>
    </nav>
  )
}

export default Navbar;