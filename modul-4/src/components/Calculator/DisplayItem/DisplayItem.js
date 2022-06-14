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
  }
}

const displayItem = ({ id, type, category, name, value }) => {
  return (
    <>
    <div style={ (type === 'cost') ? { ...styles, ...styles.cost } : styles }>
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
    </div>
    </>
  )
}

export default displayItem;