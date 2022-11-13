import React from "react";
import withUser from "components/WithUser/WithUser";
import { FaCheckCircle, FaTimesCircle  } from 'react-icons/fa';

const Movies = ({email, isAdmin}) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    text: {
      fontSize: 18,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
    },
    title: {
      fontWeight: 600
    },
    icon: {
      display: 'inline-flex',
      alignItems: 'center',
      color: isAdmin ? 'green' : 'red'
    }
  }
  return (
    <div style={style}>
      <span style={style.text}><span style={style.title}>Email:</span> {email}</span>
      <span style={style.text}><span style={style.title}>Administrator:</span> <span style={style.icon}>{isAdmin ? <FaCheckCircle /> : <FaTimesCircle /> }</span></span>
    </div>
  )
}

export default withUser(Movies);