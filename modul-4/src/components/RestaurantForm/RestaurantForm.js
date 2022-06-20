import React, { useState } from "react";

import { colors } from "helpers/colors";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  wrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    marginBottom: 7
  },
  label: {
    marginBottom: 4,
  },
  input: {
    padding: '.5rem 1rem',
    lineHeight: 1
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

const RestaurantForm = () => {
  const tips = [5, 10, 15];
  const [vat] = useState(17);
  const [priceValue, setPriceValue] = useState(0);
  const [tipValue, setTipValue] = useState(tips[0]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [isFinalPrice, setIsFinalPrice] = useState(false);

  const inputChange = (event) => {
    setPriceValue(event.target.value);
  }

  const selectChange = (event) => {
    setTipValue(event.target.value);
  }

  const handlePaste = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(Number(priceValue) === 0) {
      return alert('Kwota zamówienia nie może być równa 0');
    }

    if(Number(tipValue) === 0) {
      return alert('Daj napiwek');
    }

    const nettoPrice = Number(priceValue);
    const currentVat = Number(`1.${vat}`);
    const bruttoPrice = nettoPrice * currentVat;
    const summary = bruttoPrice + (bruttoPrice * `0.${tipValue}`);

    setFinalPrice(summary.toFixed(2));
    setIsFinalPrice((e) => !e);
  };

  const formSummary = (
    <div style={ styles }>
      <span>Do zapłaty:</span>
      <span>{ finalPrice }</span>
    </div>
  );

  return (
    <>
      {isFinalPrice ? (
        formSummary
      ): (
        <form style={ styles } onSubmit={ handleSubmit }>
          <div style={ styles.wrapper }>
            <label style={ styles.label } htmlFor="price">Kwota zamówienia</label>
            <input style={ styles.input } type="number" name="price" step="0.01" placeholder="Kwota zamówienia" onChange={ inputChange } onPaste={ handlePaste } required />
          </div>
          <div style={ styles.wrapper }>
            <label style={ styles.label } htmlFor="tip">Procent napiwku</label>
            <select style={ styles.input } name="tip" defaultValue="" onChange={ selectChange } required>
              <option value="" disabled>Wybierz procent napiwku</option>
              {tips.map( (el, i) => (
                <option key={i} value={el}>{el}%</option>
              ))}
            </select>
          </div>
          <button type="submit" style={ styles.button }>Przelicz</button>
        </form>
      )}
    </>
  )
}

export default RestaurantForm;