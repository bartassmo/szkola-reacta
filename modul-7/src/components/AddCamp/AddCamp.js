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
    border: validInput,
    fontFamily: 'inherit',
    width: '100%',
    maxWidth: '100%',
    maxHeight: 150,
    minHeight: '1rem'
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

const AddCamp = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const [message, setMessage] = useState(false);
  const onSubmit = data => {
    base('Campaigns').create([
      {
        "fields": {
          "subject": data.subject,
          "content": data.content,
          "status": 'Draft'
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
        <span>Nowa kampania została dodana.</span>
        <span>Możesz wysłać ją z podstrony <Link to="/campaigns">Kampanie</Link></span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={ styles }>
            <label htmlFor="subject" style={ styles.label }>Temat</label>
            <input
              style={errors.subject ? { ...styles.input, ...styles.inputError } : styles.input }
              placeholder="Temat"
              {
                ...register("subject",
                  {
                    required: true,
                    validate: (value) => value.length > 2
                  },
                )
              }
            />
            {errors.subject && <span style={ styles.error }>Temat jest wymagany!</span>}
          </div>
          <div style={ styles }>
            <label htmlFor="content" style={ styles.label }>Treść wiadomości</label>
            <textarea
              style={errors.content ? { ...styles.input, ...styles.inputError } : styles.input }
              type="text"
              placeholder="Treść wiadomości"
              {
                ...register("content",
                  {
                    required: true,
                    validate: (value) => value.length > 5
                  },
                )
              }
            />
            {errors.content && <span style={ styles.error }>Treść wiadomości jest wymagana!</span>}
          </div>
          <input type="submit" style={ styles.button } value="Dodaj" />
      </form>
    </div>
  )
}

export default AddCamp;