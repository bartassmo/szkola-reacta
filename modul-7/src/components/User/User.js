import React from "react"
import { Link } from "react-router-dom"
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'

import './styles.scss';

function User({ item }) {
  const { name, email, registered, picture } = item;
  const { street, city, coordinates } = item.location;
  let date = format(new Date(registered.date), 'EEEE, dd MMMM y', {locale: pl})
  return(
    <div className="user">
      <div className="user__imgWrapper">
        <img className="user__img" src={picture.thumbnail} alt={`${name.first} ${name.last}`} />
      </div>
      <div className="user__bio">
        { name.first && name.last
          ? <span className="user__text user__name">{name.first} {name.last}</span>
          : <span className="user__text user__text--error">Nie przekazano imienia i nazwiska.</span>
        }
        { street.number && street.name
          ? <span className="user__text">{street.number} {street.name}, {city}</span>
          : <span className="user__text user__text--error">Użytkownik nie podał adresu.</span>
        }
      </div>
      <div className="user__details">
        <span className="user__text">{email}</span>
        <span className="user__text">{date}</span>
      </div>
    </div>
  )
}

export default User;