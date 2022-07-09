import React from "react"
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'

import './styles.scss';

function User({ user }) {
  const { name, email, registered, picture } = user;
  const { street, city } = user.location;
  let date = format(new Date(registered.date), 'EEEE, dd MMMM y', {locale: pl})
  return(
    <div className="user-item">
      <div className="user-item__imgWrapper">
        <img className="user-item__img" src={picture.thumbnail} alt={`${name.first} ${name.last}`} />
      </div>
      <div className="user-item__bio">
        { name.first && name.last
          ? <span className="user-item__text user-item__name">{name.first} {name.last}</span>
          : <span className="user-item__text user-item__text--error">Nie przekazano imienia i nazwiska.</span>
        }
        { street.number && street.name
          ? <span className="user-item__text">{street.number} {street.name}, {city}</span>
          : <span className="user-item__text user-item__text--error">Użytkownik nie podał adresu.</span>
        }
      </div>
      <div className="user-item__details">
        <span className="user-item__text">{email}</span>
        <span className="user-item__text">{date}</span>
      </div>
    </div>
  )
}

export default User;