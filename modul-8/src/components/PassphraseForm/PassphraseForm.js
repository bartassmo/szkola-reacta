import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import LoginContext from "components/LoginContext";

const validInput = `1px solid #242424`;
const invalidInput = `1px solid #ed2939`;

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  marginBottom: 23,
  width: '40vw',
  maxWidth: '500px',
  margin: '0 auto 20px',
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

const PassphraseForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const { setAuthenticated } = useContext(LoginContext);
  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setAuthenticated(true);
    }
  }, [isSubmitSuccessful, setAuthenticated]);

  return (
    <div style={ styles }>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={ styles }>
          <label htmlFor="password" style={ styles.label }>Hasło</label>
          <input
            style={errors.password ? { ...styles.input, ...styles.inputError } : styles.input }
            type="password"
            placeholder="Hasło"
            {...register("password", {
              required: "Hasło jest wymagane.",
              pattern: {
                value: new RegExp(`^${process.env.REACT_APP_PASSPHRASE}`, 'g'),
                message: "Hasło jest nieprawidłowe."
              }
            })}
          />
          {errors.password && <span style={ styles.error }>{errors.password.message}</span>}
        </div>
        <input type="submit" style={ styles.button } value="Wyślij" />
      </form>
    </div>
  )
}

export default PassphraseForm;
