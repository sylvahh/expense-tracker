import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import ExpenceItem from './Components/ExpenceItem';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import Home from './view/Home';
import Login from './view/Login';
import Register from './view/Register';

const DUMMYEXPENSES = [
  {
    id: 'e1',
    title: 'food stuff',
    price: 111,
    date: new Date(2020, 4, 14),
  },
  {
    id: 'e2',
    title: 'Xbox console',
    price: 111,
    date: new Date(2022, 11, 24),
  },
  {
    id: 'e3',
    title: 'New TV',
    price: 111,
    date: new Date(2022, 5, 19),
  },
  {
    id: 'e4',
    title: 'Setteled debt',
    price: 111,
    date: new Date(2021, 2, 4),
  },

  {
    id: 'e5',
    title: 'car',
    price: 1110,
    date: new Date(2023, 6, 5),
  },
  {
    id: 'e6',
    title: 'car',
    price: 1110,
    date: new Date(2023, 5, 19),
  },
  {
    id: 'e7',
    title: 'New TV',
    price: 100,
    date: new Date(2023, 6, 19),
  },
  {
    id: 'e8',
    title: 'New TV',
    price: 100,
    date: new Date(2023, 6, 19),
  },
  {
    id: 'e9',
    title: 'house',
    price: 1000,
    date: new Date(2023, 12, 19),
  },
];
function App() {
  const [updateExpense, setUpdateExpense] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expenses) => {
    setUpdateExpense((prevExpense) => {
      return [expenses, ...prevExpense];
    });
  };
  return (
    <div className='App'>
      <Routes>
      <Route
          path='/'
          element={<Login />}
        />
          <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/home'
          element={<Home addExpenseHandler={addExpenseHandler} updateExpense={updateExpense} />}
        />
      </Routes>
    </div>
  );
}

export default App;
