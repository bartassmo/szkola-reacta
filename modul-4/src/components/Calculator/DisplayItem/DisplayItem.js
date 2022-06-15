import React from "react";

import { colors } from "helpers/colors";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 10,
  padding: 10,
  border: `1px solid ${colors.green}`,
  cost: {
    border: `1px solid ${colors.red}`,
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 10,
  },
  title: {
    textAlign: 'right',
    fontWeight: 500
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: colors.red,
    border: `1px solid ${colors.red}`,
    color: colors.secondary,
    padding: '.5rem 1rem',
    marginTop: 7,
    cursor: 'pointer',
    transition: 'all .2s ease-in-out'
  }
}

const displayItem = ({ id, type, category, name, value, onClick }) => {

  const onMouseOver = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = colors.red;
  }

  const onMouseLeave = (e) => {
    e.target.style.backgroundColor = colors.red;
    e.target.style.color = colors.secondary;
  }

  const handlerClick = (e) => {
    onClick(e);
  }
  return (
    <>
    <div id={ id } data-type={ type } style={ (type === 'cost') ? { ...styles, ...styles.cost } : styles }>
      <div style={ styles.row}>
        <span style={ styles.title }>Kategoria:</span>
        <span>{ category }</span>
      </div>
      <div style={ styles.row}>
        <span style={ styles.title }>Nazwa:</span>
        <span>{ name }</span>
      </div>
      <div style={ styles.row}>
        <span style={ styles.title }>Wartość:</span>
        <span>{ value }</span>
      </div>
      <button type="button" style={ styles.btn } onMouseEnter={ onMouseOver } onMouseLeave={ onMouseLeave } onClick={ handlerClick }>Usuń pozycję</button>
    </div>
    </>
  )
}

export default displayItem;