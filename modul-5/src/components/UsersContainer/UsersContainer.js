import React, { useState } from "react";

import UsersList from "components/UsersList";
import User from "components/User";

const UsersContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
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

  return (
    <div>
      <span onClick={handleClick}>Lista Userów z Fetcha</span>
      {loading && <div>Trwa ładowanie...</div>}
      {error && (
        <div>{`Niestety, wystąpił problem z pobraniem informacji - ${error}`}</div>
      )}
      <UsersList>
        {data &&
          data.map(({ id, firstName, email, jobTitle }) => (
            <User id={ id } name={ firstName } email={ email } position={ jobTitle } />
          ))}
      </UsersList>
    </div>
  )
}

export default UsersContainer;