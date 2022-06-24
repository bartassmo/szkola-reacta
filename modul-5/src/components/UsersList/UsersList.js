import React from "react";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  maxWidth: 700,
  margin: '10px auto 0'
}

const UsersList = ({ children }) => {
  return (
    <ul style={ styles }>
      { children }
    </ul>
  )
}

export default UsersList;