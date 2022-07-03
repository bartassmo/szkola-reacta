import React, { useRef, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 10
  },
  label: {
    marginBottom: 4
  },
  input: {
    padding: '.5rem 1rem',
    lineHeight: 1,
    resize: 'none',
    width: 200
  },
  button: {
    alignSelf: 'center',
    width: 'fit-content',
    backgroundColor: 'transparent',
    border: '1px solid #242424',
    lineHeight: 1,
    padding: '.5rem 1.5rem',
    transition: 'all .2s ease-in-out',
    marginTop: 10,
    cursor: 'pointer'
  },
}

const ReCaptcha = () => {
  const [
    { name, email, bio },
    setState ] = useState('');

  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( name && email && bio ) {
      setState({
        name: '',
        email: '',
        bio: ''
      })
      recaptchaRef.current.reset();
      alert('dziękujemy za wysłanie formularza');
    }
  }

  return (
    <form style={ styles } onSubmit={ handleSubmit }>
      <div style={ styles.wrapper }>
        <label style={ styles.label } htmlFor="name">Imię</label>
        <input
          type="text"
          id="recaptchaName"
          placeholder="Imię"
          name="name"
          value={name}
          onChange={handleChange}
          style={ styles.input }
        />
      </div>
      <div style={ styles.wrapper }>
        <label style={ styles.label } htmlFor="email">Email</label>
        <input
          type="email"
          id="recaptchaEmail"
          placeholder="Adres email"
          name="email"
          value={email}
          onChange={handleChange}
          style={ styles.input }
        />
      </div>
      <div style={ styles.wrapper }>
        <label style={ styles.label } htmlFor="bio">Bio</label>
        <textarea
          type="textarea"
          id="bio"
          placeholder="Bio"
          name="bio"
          rows="2"
          value={bio}
          onChange={handleChange}
          style={ styles.input }
        />
      </div>
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={handleChange}
        ref={recaptchaRef}
        />
      <div className={ styles.wrapper }>
        <input type="submit" style={ styles.button } />
      </div>
    </form>
  )
}

export default ReCaptcha;