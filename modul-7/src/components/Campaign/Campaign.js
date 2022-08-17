import React, { useEffect, useState, useRef } from "react";
import { mail } from "api/mail";
import base from "api/base";


const styles = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 15,
  cell: {
    marginBottom: 0,
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
    display: 'block'
  },
  action: {
    marginTop: 10
  },
  draft: {
    display: 'inline-block',
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: 'blue',
    cursor: 'pointer'
  },
  sent: {
    display: 'inline-block',
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: 'green',
  }
}

function Campaign({camp}) {
  const { fields: { subject, content, status }} = camp;
  let action;
  const [subs, setSubs] = useState([]);
  let recipient = '';

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      base('Subscribers').select({view: "Grid"}).eachPage(function page(records, fetchNextPage) {

        setSubs(records);
        fetchNextPage();

      }, function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      });

      return () => {
        effectRan.current = true;
      }
    }
  }, []);

  subs.map((i) => {
    return recipient += `${i.fields.email}, `;
  })

  const messageData = {
    from: 'Kampania szkoły Reacta campaign@helendoron.pl',
    to: recipient,
    subject: subject,
    text: content
  };



  const onSent = () => {
    alert('Twoja kampania już była wysłana');
  }

  const onDraft = (e) => {
    let confirmDel = prompt('Jeśli chcesz wysłać wpisz SEND');
    if(confirmDel === 'SEND') {
      mail(messageData);
      e.target.style.backgroundColor = 'green';
      e.target.style.pointerEvents = 'none';
      alert(`Kampania mailowa została wysłana.`);
    } else {
      alert(`Zrezygnowałeś z wysłania kampanii.`);
    }
  }

  if (status === 'Sent') {
    action = <span onClick={onSent} style={styles.sent}></span>
  } else {
    action = <span onClick={onDraft} style={styles.draft}></span>
  }
  return (
    <div style={styles}>
      <div style={{...styles, ...styles.cell}}>
        <span style={styles.title}>{subject}</span>
        <span style={styles.text}>{content}</span>
      </div>
      <div style={styles.action}>
        {action}
      </div>
    </div>
  )
}

export default Campaign;