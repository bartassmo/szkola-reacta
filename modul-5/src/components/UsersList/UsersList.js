import React from "react";

import User from "components/User";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  maxWidth: 700,
  margin: '10px auto 0'
}

const UsersList = ({ users, saveUser }) => {
  return (
    <ul style={ styles }>
      {users &&
        users.map((user) => (
          <User
            key={user.id}
            user={user}
            saveUser={saveUser}
           />
        ))
      }
    </ul>
  )
}

export default UsersList;