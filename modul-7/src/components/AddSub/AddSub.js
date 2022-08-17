import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import base from "api/base";
import { Link } from "react-router-dom";

const validInput = `1px solid #242424`;
const invalidInput = `1px solid #ed2939`;

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  marginBottom: 23,
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
  label: {
    margin: '0 0 5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  input: {
    padding: '0.5rem 1rem',
    margin: 0,
    lineHeight: 1,
    resize: 'none',
    border: validInput,
  },
  inputError: {
    border: invalidInput,
  },
  error: {
    display: 'block',
    pointerEvents: 'none',
    fontSize: 12,
    color: '#ed2939',
    fontWeight: 500,
    position: 'absolute',
    top: '100%',
    left: 0,
  },
  thanks: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    backgroundColor: '#fff',
    zIndex: 1,
    transition: 'all .2s ease-in-out'
  },
  inactive: {
    opacity: 0,
    pointerEvents: 'none',
  },
  active: {
    opacity: 1,
    pointerEvents: 'all',
  },
  button: {
    alignSelf: 'center',
    width: 'fit-content',
    backgroundColor: 'transparent',
    border: validInput,
    lineHeight: 1,
    padding: '.5rem 1.5rem',
    transition: 'all .2s ease-in-out',
    marginTop: 10,
    cursor: 'pointer'
  }
}

const AddSub = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const [message, setMessage] = useState(false);
  const onSubmit = data => {
    base('Subscribers').create([
      {
        "fields": {
          "name": data.name,
          "email": data.email
        }
      },
    ], function(err) {
      if (err) {
        console.error(err);
        return;
      }
    });
    setMessage(true);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div style={ styles }>
      <div style={message ? { ...styles.thanks, ...styles.active } : { ...styles.thanks, ...styles.inactive} }>
        <strong>Dziękujemy!</strong>
        <span>Nowy użytkownik został dodany.</span>
        <Link to="/subscribers">Sprawdź listę użytkowników</Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={ styles }>
            <label htmlFor="name" style={ styles.label }>Imię</label>
            <input
              style={errors.name ? { ...styles.input, ...styles.inputError } : styles.input }
              placeholder="Imię"
              {
                ...register("name",
                  {
                    required: true,
                    validate: (value) => value.length > 2
                  },
                )
              }
            />
            {errors.name && <span style={ styles.error }>Imię jest wymagane!</span>}
          </div>
          <div style={ styles }>
            <label htmlFor="email" style={ styles.label }>Adres email</label>
            <input
              style={errors.email ? { ...styles.input, ...styles.inputError } : styles.input }
              type="email"
              placeholder="Adres email"
              {
                ...register("email",
                  {
                    required: true,
                    validate: (value) => value.length > 5
                  },
                )
              }
            />
            {errors.email && <span style={ styles.error }>Adres email jest wymagany!</span>}
          </div>
          <input type="submit" style={ styles.button } value="Wyślij" />
      </form>
    </div>
  )
}

export default AddSub;