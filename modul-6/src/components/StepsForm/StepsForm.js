import React, { useState } from "react";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  minHeight: 100,
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  hidden: {
    display: 'none'
  },
  label: {
    marginBottom: 5,
    fontSize: 17,
    fontWeight: 500
  },
  input: {
    border: '1px solid #242424',
    padding: '10px 10px',
    width: 200,
    maxWidth: 200,
    fontSize: 16,
    boxSizing: 'border-box',
    marginBottom: 3,
    backgroundColor: '#fff',
    cursor: 'pointer'
  }
}

const initialState = {
  name: 'Piotr',
  age: '36',
  hobby: 'tenis'
}

const StepsForm = () => {
  const [
    { name, nameCheckbox, age, ageCheckbox, hobby, hobbyCheckbox },
    setState ] = useState(initialState);

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (e.target.type === "checkbox") {
        setState((prevState) => ({ ...prevState, [name]: e.target.checked }));
      } else {
        setState((prevState) => ({ ...prevState, [name]: value }));
      }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setState(() => ({
      name: '',
      age: '',
      hobby: ''
    }))
    alert('Dziękujemy za wysłanie formularza!')
  }

  return (
    <form style={ styles } onSubmit={handleSubmit}>
      <div style={nameCheckbox && name ? styles.hidden : styles.wrapper }>
        <label htmlFor="name" style={ styles.label }>Imię:</label>
        <input id="name" name="name" type="text" value={name} style={styles.input} onChange={ handleChange } />
        <div>
          <input id="nameCheckbox" name="nameCheckbox" type="checkbox" value={nameCheckbox} onChange={ handleChange } />
          <label htmlFor="nameCheckbox">Potwierdź wpisaną wartość</label>
        </div>
      </div>
      {name && nameCheckbox && (
        <div style={ageCheckbox && age ? styles.hidden : styles.wrapper }>
          <label htmlFor="age" style={ styles.label }>Wiek:</label>
          <input id="age" name="age" type="number" value={age} style={ styles.input } onChange={ handleChange } />
          <div>
            <input id="ageCheckbox" name="ageCheckbox" type="checkbox" value={ageCheckbox} onChange={ handleChange } />
            <label htmlFor="ageCheckbox">Potwierdź wpisaną wartość</label>
          </div>
        </div>
      )}
      {age && ageCheckbox && (
        <div style={hobbyCheckbox && hobby ? styles.hidden : styles.wrapper }>
          <label htmlFor="hobby" style={ styles.label }>Hobby:</label>
          <select name="hobby" onChange={ handleChange } style={ styles.input }>
            <option value="sport">sport</option>
            <option value="bieganie">Bieganie</option>
            <option value="gotowanie">Gotowanie</option>
            <option value="sprzątanie">Sprzątanie</option>
            <option value="pracowanie">Pracowanie</option>
          </select>
          <div>
            <input id="hobbyCheckbox" name="hobbyCheckbox" type="checkbox" value={hobbyCheckbox} onChange={ handleChange } />
            <label htmlFor="hobbyCheckbox">Potwierdź wpisaną wartość</label>
          </div>
        </div>
      )}
      {
        name && nameCheckbox && age && ageCheckbox && hobby && hobbyCheckbox && (
        <>
          <div>
            <h3>Twoje dane to:</h3>
            <div style={styles.wrapper}>
              <span>Imię: {name}</span>
            </div>
            <div style={styles.wrapper}>
              <span>Wiek: {age}</span>
            </div>
            <div style={styles.wrapper}>
              <span>Hobby: {hobby}</span>
            </div>
          </div>
          <input type="submit" value="Wyślij" style={ styles.input } />
        </>
        )
      }
    </form>
  )
}

export default StepsForm;