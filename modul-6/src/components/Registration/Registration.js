import React, { useEffect, useRef, useState } from "react";
import styles from './Registration.module.css';

const Registration = () => {

  const validate = [
    {
      name: 'upper',
      regex: '[A-Z]',
      error: 'Hasło zawiera co najmniej 1 dużą literę'
    },
    {
      name: 'lower',
      regex: '[a-z]',
      error: 'Hasło zawiera co najmniej 1 małą literę'
    },
    {
      name: 'numbers',
      regex: '[0-9]',
      error: 'Hasło zawiera co najmniej 1 liczbę'
    },
    {
      name: 'special',
      regex: "[`~!@#$%^&*()+{}?|,./;:]",
      error: 'Hasło zawiera co najmniej 1 znak specjalny'
    },
    {
      name: 'minLength',
      regex: "^.{8,}$",
      error: 'Hasło powinno składać się z co najmniej 8 znaków'
    }
  ];

  const [confirmMessage, setConfirmMessage] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const passwordInput = useRef(null);
  const confirmInput = useRef(null);

  const getData = async () => {
    try {
      const response = await fetch('/users.json');
      if (!response.ok) {
        throw new Error(
          `Wystąpił błąd HTTP: Jego status to ${response.status}`
        )
      }
      let actualData = await response.json()
      setData(actualData)
      setError(null)
    } catch(err) {
      setError(err.message);
      setData(null);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const handleBlur = (e) => {
    const value = e.target.value;
    setCheckEmail(false);
    if(value) {
      getData();
      data.filter((user) => {
        if (user.email.toLowerCase() === value.toLowerCase()) {
          return setCheckEmail(true)
        }
        return user;
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirm } = e.target.elements;

    const data = {
      email: email.value,
      password: password.value,
      confirm: confirm.value
    }

    if(data.confirm !== data.password) {
      setConfirmMessage('Podane hasła nie są takie same!')
    } else {
      setConfirmMessage(null)
      const errors = document.getElementById('errors');
      errors.innerHTML = '';
      let validateLength = validate.length;
      var count = 0;
      for (const item of validate) {
        const regex = new RegExp(item.regex);
        const span = document.createElement('span')
        span.classList.add(regex.test(data.password) ? styles.valid : styles.invalid);
        if(regex.test(data.password)) {
          count++
        }
        span.append(item.error);
        errors.append(span);
      }
      if(count === validateLength && !checkEmail) {
        setTimeout(() => {
          errors.innerHTML = '';
          e.target.reset();
        }, 500);
      }
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className={ styles.wrapper }>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" onBlur={ handleBlur } />
        {error && <div className={ styles.error }>Niestety, wystąpił problem z pobraniem informacji - {error}</div>}
        {checkEmail && <div className={ styles.error }>Ten adres email został już użyty.</div>}
      </div>
      <div className={ styles.wrapper }>
        <label htmlFor="password">Hasło</label>
        <input id="password" type="password" ref={passwordInput} disabled={checkEmail} />
      </div>
      <div className={ styles.wrapper }>
        <label htmlFor="confirm">Potwierdź hasło</label>
        <input id="confirm" type="password" ref={confirmInput} disabled={checkEmail} />
      </div>
      <div className={ styles.wrapper }>
        {confirmMessage && <span className={ styles.error }>Podane hasła nie są takie same!</span>}
        <div id="errors" className={styles.errors }>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <input type="submit" className={ styles.submit } />
      </div>
    </form>
  )
}

export default Registration;