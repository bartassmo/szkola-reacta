import React, { useState, useEffect, useRef } from "react";
import User from "components/User/User";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '75vw',
  margin: '40px auto 0'
}

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      fetch('https://randomuser.me/api/?results=2')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUsers(data.results);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      })

      return () => {
        effectRan.current = true;
      }
    }
  }, []);

  return (
    <div style={styles}>
      {isLoading && !hasError && <p>Trwa wczytywanie...</p>}
      {hasError && <p>Wystąpił problem - szczegóły w konsoli.</p>}
      {users.map((user) => (
        <User item={user} key={user.login.uuid} />
      ))}
    </div>
  )
}

export default UserList;