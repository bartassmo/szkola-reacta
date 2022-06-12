import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { colors } from "helpers/colors";

const validInput = `1px solid ${colors.primary}`;
const invalidInput = `1px solid ${colors.red}`;

const styles = {
  display: 'flex',
  flexDirection: 'column',
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
  check: {
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 0,
    alignItems: 'center'
  },
  checkLabel: {
    marginLeft: 5,
    lineHeight: '1',
    display: 'inline-block'
  },
  error: {
    display: 'block',
    pointerEvents: 'none',
    fontSize: 12,
    color: `${colors.red}`,
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
    border: `1px solid ${colors.primary}`,
    lineHeight: 1,
    padding: '.5rem 1.5rem',
    transition: 'all .2s ease-in-out',
    marginTop: 10,
    cursor: 'pointer'
  }
}

const ReactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const [message, setMessage] = useState(false);
  const onSubmit = data => {
    setMessage(true);
  };
  const handleReset = () => {
    setMessage(false);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div style={ styles }>
      <div style={message ? { ...styles.thanks, ...styles.active } : { ...styles.thanks, ...styles.inactive} }>
        <strong>Dziękujemy!</strong> 
        <span>Twoja wiadomość została wysłana.</span>
        <button type="button" style={ styles.button } onClick={handleReset} >Wyślij nowy formularz</button>
      </div>
      <form style={message ? { ...styles, ...styles.inactive } : styles } onSubmit={handleSubmit(onSubmit)}>
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

        <div style={ styles }>
          <label htmlFor="Bio" style={ styles.label }>Bio</label>
          <textarea
            style={errors.bio ? { ...styles.input, ...styles.inputError } : styles.input }
            placeholder="Bio"
            {
              ...register("bio",
                {
                  required: true,
                  validate: (value) => value.length >= 10
                },
              )
            }
          />
          {errors.bio && <span style={ styles.error }>Wpisz przynajmniej 10 znaków</span>}
        </div>

        <div style={ styles }>
          <span style={ styles.label }>Płeć</span>
          <div>
            <label style={{ ...styles.label, ...styles.check }}>
              <input
                style={ styles.input }
                type="radio"
                name="gender"
                value="woman"
                id="woman"
                {
                  ...register("gender",
                    {
                      required: true
                    },
                  )
                }
              />
              <span style={ styles.checkLabel }>Kobieta</span>
            </label>
            <label style={{ ...styles.label, ...styles.check }}>
              <input
                style={ styles.input }
                type="radio"
                name="gender"
                value="man"
                id="man"
                {
                  ...register("gender",
                    {
                      required: true
                    },
                  )
                }
              />
              <span style={ styles.checkLabel }>Mężczyzna</span>
            </label>
          </div>
          {errors.gender && <span style={ styles.error }>Wybierz płeć</span>}
        </div>

        <div style={ styles }>
          <div>
            <label style={{ ...styles.label, ...styles.check }}>
              <input
                style={ styles.input }
                type="checkbox"
                name="agree"
                id="agree"
                {
                  ...register("agree",
                    {
                      required: true
                    },
                  )
                }
              />
              <span style={ styles.checkLabel }>Akceptuję regulamin</span>
            </label>
          </div>
          {errors.agree && <span style={ styles.error }>Zaakceptuj regulamin</span>}
        </div>

        <input type="submit" style={ styles.button } value="Wyślij" />
      </form>
    </div>
  );

}

export default ReactForm;