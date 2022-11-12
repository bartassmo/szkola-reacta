import React from "react";
import withUser from "components/WithUser/WithUser";

const Movies = ({email, isAdmin}) => {
  return (
    <>
      <h1>Email: {email}</h1>
      <h2>isAdmin: {isAdmin ?? 'tak'}</h2>
    </>
  )
}

export default withUser(Movies);