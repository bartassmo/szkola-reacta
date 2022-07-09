import React from "react";
import { useLocation } from "react-router-dom";

import './styles.scss';

function UserDetails() {
  const location = useLocation();
  const user = location.state.user;
  const { name, email, registered, picture } = user;
  const { street, city, coordinates } = user.location;

  return (
    <div className="user">
      <div className="user__imgWrapper">
        <img src={picture.large} alt={`${name.first} ${name.last}`} className="user__img" />
      </div>
      <div className="user__bio">
      { name.first && name.last
          ? <span className="user-item__text user-item__name">{name.first} {name.last}</span>
          : <span className="user-item__text user-item__text--error">Nie przekazano imienia i nazwiska.</span>
        }
        { street.number && street.name
          ? <span className="user-item__text"><strong>Address:</strong> {street.number} {street.name}, {city}</span>
          : <span className="user-item__text user-item__text--error">Użytkownik nie podał adresu.</span>
        }
      </div>
      <div className="user__details">
        <span className="user-item__text"><strong>E-mail:</strong> {email}</span>
      </div>
    </div>
  )
}

export default UserDetails;