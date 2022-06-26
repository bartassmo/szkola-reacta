import React from "react";
import { Link } from "react-router-dom";

import { colors } from "helpers/colors";

const styles = {
  display: 'block',
  border: `1px solid ${colors.primary}`,
  paddingTop: 10,
  paddingBottom: 10,
  marginBottom: -1,
  cursor: 'pointer',
  textDecoration: 'none',
  li: {
    listStyle: 'none'
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 15,
  },
  item: {
    fontSize: 18,
    textAlign: 'left',
    padding: 5,
    color: colors.primary,
  },
  title: {
    fontWeight: 700,
    textAlign: 'right'
  }
}

const User = ({user, saveUser}) => {
  const { firstName, email, jobTitle } = user;
  return (
    <li style={ styles.li } onClick={() => saveUser(user)}>
      <Link style={ styles } to='/user-profile'>
        <div style={ styles.wrapper }>
          <span style={{ ...styles.item, ...styles.title }}>Imię</span>
          <span style={ styles.item }>{ firstName }</span>
        </div>
        <div style={ styles.wrapper }>
          <span style={{ ...styles.item, ...styles.title }}>Email</span>
          <span style={ styles.item }>{ email }</span>
        </div>
        <div style={ styles.wrapper }>
          <span style={{ ...styles.item, ...styles.title }}>Stanowisko</span>
          <span style={ styles.item }>{ jobTitle }</span>
        </div>
      </Link>
    </li>
  )
}

export default User;