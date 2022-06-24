import React from "react";

import { colors } from "helpers/colors";

const styles = {
  display: 'block',
  border: `1px solid ${colors.primary}`,
  paddingTop: 10,
  paddingBottom: 10,
  marginBottom: -1,
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 15,
    
  },
  item: {
    fontSize: 18,
    textAlign: 'left',
    padding: 5
  },
  title: {
    fontWeight: 700,
    textAlign: 'right'
  }
}

const User = ({ id, name, email, position }) => {
  return (
    <li style={ styles } key={ id }>
      <div style={ styles.wrapper }>
        <span style={{ ...styles.item, ...styles.title }}>Imię</span>
        <span style={ styles.item }>{ name }</span>
      </div>
      <div style={ styles.wrapper }>
        <span style={{ ...styles.item, ...styles.title }}>Email</span>
        <span style={ styles.item }>{ email }</span>
      </div>
      <div style={ styles.wrapper }>
        <span style={{ ...styles.item, ...styles.title }}>Stanowisko</span>
        <span style={ styles.item }>{ position }</span>
      </div>
    </li>
  )
}

export default User;