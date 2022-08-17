import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import base from "api/base";
import './styles.scss';

function SubscriberDetails() {
  const location = useLocation();
  const sub = location.state.sub;
  const id = location.state.id;
  const { name, email, registeredAt } = sub;
  const date = format(new Date(registeredAt), 'dd MMMM y', {locale: pl})
  const navigate = useNavigate();
  
  function handleRemove() {
    let confirmDel = prompt('Jeśli chcesz usunąć wpisz DELETE');
    if(confirmDel === 'DELETE') {
      alert(`Dziękujemy, wybrana osoba zostanie usunięta z listy subskrybentów`);
      navigate('/subscribers');
      base('Subscribers').destroy([id], function(err) {
        if (err) {
          console.error(err);
          alert('Coś poszło nie tak.. Sprawdź konsolę');
          return;
        }
      });
    } else {
      alert(`Zrezygnowałeś z usuwania subskrybenta.`);
    }
  }

  return (
    <div className="sub">
      <div className="sub__item">
        <span className="sub__text sub__name">Imię:</span>
        <span className="sub__text sub__value">{name}</span>
      </div>
      <div className="sub__item">
        <span className="sub__text sub__name">Adres e-mail:</span>
        <span className="sub__text sub__value">{email}</span>
      </div>
      <div className="sub__item">
        <span className="sub__text sub__name">Zarejestrowany od:</span>
        <span className="sub__text sub__value">{date}</span>
      </div>
      <div className="sub__item sub__action">
        <span className="sub__delete" onClick={handleRemove}>Usuń</span>
      </div>
      <Link className="sub__btn" to={"/subscribers/"}>Powrót do listy subskrybentów</Link>
    </div>
  )
}

export default SubscriberDetails;