import React from "react";
import WithUser from "components/WithUser/WithUser";

const Places = ({email, isAdmin}) => {
  return (
    <>
      <h1>Email: {email}</h1>
      <h2>isAdmin: {isAdmin ?? 'tak'}</h2>
    </>
  )
}

export default WithUser(Places);