import React, { useEffect, useState } from "react";

import { colors } from "helpers/colors";
import { initialCosts } from "helpers/initialCosts";
import { initialIncome } from "helpers/initialIncome";

import AddItem from "./AddItem";
import DisplayItem from "./DisplayItem";

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  column: {
    maxWidth: '49.5%',
    flex: '1 1 0'
  },
  total: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.red,
  },
  profit: {
    color: colors.green,
  }
}

const getLocalData = localStorage.getItem("localData");

const Calculator = () => {
  const parseLocalData = getLocalData === "" ? 0 : JSON.parse(getLocalData);

  const [cost, setCost] = useState(
    parseLocalData !== null ? parseLocalData.cost : initialCosts
  );
  const [income, setIncome] = useState(
    parseLocalData !== null ? parseLocalData.income : initialIncome
  );
  const [total, setTotal] = useState(0);

  const addData = (item) => {
    if(item.type === 'cost') {
      setCost([...cost, item])
    } else if (item.type === 'income') {
      setIncome([...income, item])
    }
  }

  const deleteItem = (e) => {
    const elemID = e.target.parentNode.getAttribute('id');
    const elemType = e.target.parentNode.getAttribute('data-type');
    if(elemType === 'cost') {
      setCost( cost.filter(el => {
        return el.id !== elemID;
      }))
    } else {
      setIncome( income.filter(el => {
        return el.id !== elemID;
      }))
    }
  }

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify({ cost, income }));

    const costValue = cost.reduce(
      (total, currentItem) => {
        return total = parseFloat(total) + parseFloat(currentItem.value)
      }, 0);

    const incomeValue = income.reduce(
      (total, currentItem) => {
        return total = parseFloat(total) + parseFloat(currentItem.value)
      }, 0);
    setTotal(incomeValue + -costValue);
  }, [cost, income, total])

  return (
    <>
    <AddItem data={addData} />
    <h1 style={ total >= 0 ? {...styles.total, ...styles.profit } : styles.total }>Suma: { total }</h1>
    <div style={ styles }>
      <div style={ styles.column }>
        { cost.map((el, i) => (
          <DisplayItem
            key={ i }
            id={ el.id }
            type={ el.type }
            category={ el.category }
            name={ el.name }
            value={ el.value }
            onClick={ deleteItem }
          />
        ))}
      </div>
      <div style={ styles.column }>
      { income.map((el, i) => (
          <DisplayItem
            key={ i }
            id={ el.id }
            type={ el.type }
            category={ el.category }
            name={ el.name }
            value={ el.value }
            onClick={ deleteItem }
          />
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Calculator;