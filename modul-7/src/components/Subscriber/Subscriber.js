import React from "react";
import { Link } from "react-router-dom";

const styles = {
  marginBottom: 30,
  display:'table',
  item: {
    display: 'table-row'
  },
  label: {
    display: 'table-cell',
    textAlign: 'right',
    padding: '0 5px',
  },
  info: {
    display: 'table-cell',
    padding: '0 5px',
  },
  link: {
    color: 'currentColor',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none'
  }
}

function Subscriber({sub}) {
  const { id, fields: { name, email }} = sub;
  return (
    <div data-id={id} style={styles}>
      <span style={styles.item}>
        <span style={styles.label}>Imię:</span>
        <span style={styles.info}>
          <Link
            state={{ id: id, sub: sub.fields }}
            to={`/subscribers/${id}`}
            title={`Przejdź do ${sub.fields.name}`}
            style={styles.link}>
              {name}
          </Link>
        </span>
      </span>
      <span style={styles.item}>
        <span style={styles.label}>Adres e-mail:</span>
        <span style={styles.info}>
          <Link
            state={{ id: id, sub: sub.fields }}
            to={`/subscribers/${id}`}
            title={`Przejdź do ${sub.fields.name}`}
            style={styles.link}>
              {email}
          </Link>
        </span>
      </span>
    </div>
  )
}

export default Subscriber;