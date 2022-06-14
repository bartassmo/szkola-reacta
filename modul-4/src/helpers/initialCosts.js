import { v4 } from 'uuid';

export const initialCosts = [
  {
    id: v4(),
    type: 'cost',
    category: 'praca',
    name: 'Prezent pożegnalny',
    value: '14'
  },
  {
    id: v4(),
    type: 'cost',
    category: 'miasto',
    name: 'Uber',
    value: '7'
  },
  {
    id: v4(),
    type: 'cost',
    category: 'miasto',
    name: 'Kolacja',
    value: '180'
  },
  {
    id: v4(),
    type: 'cost',
    category: 'inne',
    name: 'Zgubiłem',
    value: '50'
  },
]