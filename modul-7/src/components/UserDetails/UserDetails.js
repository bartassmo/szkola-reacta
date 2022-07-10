import React from "react";
import { useLocation } from "react-router-dom";
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'

import Map from "components/Map";

import './styles.scss';

function UserDetails() {
  const location = useLocation();
  const user = location.state.user;
  const { name, email, cell, registered, picture } = user;
  const { street, city, country, coordinates } = user.location;
  const date = format(new Date(registered.date), 'EEEE, dd MMMM y', {locale: pl})
  console.log(user);

  return (
    <div className="user">
      <div className="user__imgWrapper">
        <img src={picture.large} alt={`${name.first} ${name.last}`} className="user__img" />
      </div>
      <div className="user__bio">
      { name.first && name.last
          ? <span className="user__name">{name.first} {name.last}</span>
          : <span className="user__name user-item__text--error">Nie przekazano imienia i nazwiska.</span>
        }
        { street.number && street.name
          ? <span className="user-item__text user__col"><strong>Adres:</strong> <div className="user__address"><span>{street.number} {street.name},</span><span>{city}, {country}</span></div></span>
          : <span className="user-item__text user-item__text--error">Użytkownik nie podał adresu.</span>
        }
      </div>
      <div className="user__details">
        <span className="user-item__text user__col"><strong>Adres e-mail:</strong> <a href={`mailto:${email}`}>{email}</a></span>
        <span className="user-item__text user__col"><strong>Nr tel.:</strong> <a href={`tel:${cell}`}>{cell}</a></span>
        <span className="user-item__text user__col"><strong>Data rejestracji:</strong> {date}</span>
      </div>
      <div className="user__map">
        <Map lat={coordinates.latitude} long={coordinates.longitude} />
      </div>
    </div>
  )
}

export default UserDetails;