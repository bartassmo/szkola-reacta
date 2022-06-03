import React, { useCallback, useState } from "react";

function EmployeesItem({ name, age, salary, position }) {
  const [isVisible, setIsVisible] = useState(false);
  const showMore = useCallback(
    () => setIsVisible(!isVisible),
    [isVisible]
  );
  const styles = {
    display: 'flex',
    borderBottom: '1px solid #242424',
    maxWidth: '45vw',
    margin: '0 auto',
    items: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: 15,
      width: '50%',
      alignItems: 'center',
      padding: 10
    },
    handler: {
      cursor: 'pointer',
    },
    textRight: {
      textAlign: 'right',
    },
    info: {
      transition: 'all .2s',
      opacity: isVisible ? 1 : 0,
      pointerEvents: isVisible ? 'all' : 'none',
      visibility: isVisible ? 'visible': 'hidden',
    }
  }
  return (
    <>
      <div style={ styles }>
        <div style={{ ...styles.items, ...styles.handler }} onClick={showMore}>
          <span style={ styles.textRight }>Imię:</span>
          <span>{ name }</span>
        </div>
        <div style={{ ...styles.items, ...styles.info }} isVisible={ isVisible }>
          <span style={ styles.textRight }>Wiek:</span>
          <span>{ age }</span>
          <span style={ styles.textRight }>Wynagrodzenie:</span>
          <span>{ salary }</span>
          <span style={ styles.textRight }>Stanowisko:</span>
          <span>{ position }</span>
        </div>
      </div>
    </>
  )
}

export default EmployeesItem;