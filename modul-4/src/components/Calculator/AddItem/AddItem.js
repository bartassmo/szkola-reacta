import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 } from 'uuid';

import { colors } from "helpers/colors";

const validColor = `${colors.primary}`;
const invalidColor = `${colors.red}`;

const styles = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  marginBottom: 20,
  wrapper: {
    maxWidth: '40vw',
    margin: '0 auto 20px',
  },
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
    borderWidth: '0 0 1px 0',
    borderColor: validColor,
    outline: 0,
  },
  inputError: {
    borderColor: invalidColor,
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

const AddItem = (props) => {
  const { register, handleSubmit, reset, formState: {errors, isSubmitSuccessful } } = useForm({
    defaultValues: {
      id: v4()
    }
  });
  const categories = ['praca', 'miasto', 'dom', 'inne'];

  const onSubmit = data => {
    props.data(data);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form style={{ ...styles, ...styles.wrapper }} onSubmit={ handleSubmit(onSubmit) }>
      <div style={ styles }>
        <span style={ styles.label }>Typ:</span>
        <div>
          <label style={{ ...styles.label, ...styles.check }}>
            <input
              style={ styles.input }
              type="radio"
              name="type"
              value="income"
              id="income"
              {
                ...register("type",
                  {
                    required: true
                  },
                )
              }
            />
            <span style={ styles.checkLabel }>Przychód</span>
          </label>
          <label style={{ ...styles.label, ...styles.check }}>
            <input
              style={ styles.input }
              type="radio"
              name="type"
              value="cost"
              id="cost"
              {
                ...register("type",
                  {
                    required: true
                  },
                )
              }
            />
            <span style={ styles.checkLabel }>Wydatek</span>
          </label>
        </div>
        {errors.type && <span style={ styles.error }>Określ typ</span>}
      </div>
      <div style={ styles }>
        <label htmlFor="name" style={ styles.label }>Nazwa</label>
        <input
          style={errors.name ? { ...styles.input, ...styles.inputError } : styles.input }
          placeholder="Nazwa"
          {
            ...register("name",
              {
                required: true,
                validate: (value) => value.length > 3
              },
            )
          }
        />
        {errors.name && <span style={ styles.error }>Nazwa (min. 5 znaków) jest wymagana</span>}
      </div>

      <div style={ styles }>
        <label htmlFor="category" style={ styles.label }>Kategoria</label>
        <select style={ styles.input }  defaultValue="" {...register("category", { required: true })} >
          <option disabled value="">Wybierz kategorię</option>
          {categories.map((el, i) => (
            <option key={i} value={el}>{el}</option>
          ))}
        </select>
        {errors.category && <span style={ styles.error }>Wybór kategorii jest wymagany</span>}
      </div>

      <div style={ styles }>
        <label htmlFor="value" style={ styles.label }>Wartość</label>
        <input
          style={errors.name ? { ...styles.input, ...styles.inputError } : styles.input }
          type="number"
          placeholder="Wartość"
          step="0.01"
          {
            ...register("value",
              {
                required: true,
                validate: (value) => value > 0
              },
            )
          }
        />
        {errors.value && <span style={ styles.error }>Podanie wartości (dodatniej) jest wymagane</span>}
      </div>
      <input type="submit" style={ styles.button } value="Dodaj" />
    </form>
  )
}

export default AddItem;