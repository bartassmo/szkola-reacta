import { v4 } from 'uuid';

export const initialIncome = [
  {
    id: v4(),
    type: 'income',
    category: 'praca',
    name: 'Wynagrodzenie',
    value: '3333'
  },
  {
    id: v4(),
    type: 'income',
    category: 'praca',
    name: 'Premia',
    value: '212'
  },
  {
    id: v4(),
    type: 'income',
    category: 'inne',
    name: 'Darowizna',
    value: '50'
  },
  {
    id: v4(),
    type: 'income',
    category: 'inne',
    name: 'Pożyczka',
    value: '13'
  },
]