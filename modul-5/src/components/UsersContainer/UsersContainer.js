import React, { useEffect, useState } from "react";

import UserSearch from "components/UserSearch";
import UsersList from "components/UsersList";

const styles = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const UsersContainer = ({saveUser}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/users.json');
      if (!response.ok) {
        throw new Error(
          `Wystąpił błąd HTTP: Jego status to ${response.status}`
        )
      }
      let actualData = await response.json()
      setData(actualData)
      setError(null)
    } catch(err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && e.keyCode === 13) {
      setValue(e.target.value.toLowerCase())
    } else if(e.target.value === '') {
      setValue(null);
    }
  }
  const filteredUsers = data.filter((user) => {
    if (value) {
      return user.firstName.toLowerCase().includes(value.toLowerCase())
    }
    return user
  })


  return (
    <div style={ styles }>
      {loading && <div>Trwa ładowanie...</div>}
      {error && (
        <div>{`Niestety, wystąpił problem z pobraniem informacji - ${error}`}</div>
      )}
      <UserSearch onKeyDown={ handleKeyDown } setValue={ setValue } />
      <UsersList users={ filteredUsers } saveUser={ saveUser } />
    </div>
  )
}

export default UsersContainer;