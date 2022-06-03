import React from "react";

import { colors } from 'helpers/colors';

function MenuLink({ to, children, isActive }) {

  const styles = {
    color: isActive ? `${colors['amour']}` : `${colors['imperial']}`,
    margin: '0 .75rem',

  }

  return (
    <li>
      <a style={ styles } href={ to } isActive={ isActive }>{ children }</a>
    </li>
  )
}

export default MenuLink;