import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log( store.getState() );


store.dispatch( addExpense({
  description: 'videogames',
  amount: 1000,
  createdAt: 500
}) );

store.dispatch( addExpense({
  description: 'yuki videogames',
  amount: 500,
  createdAt: 1000
}) );

store.dispatch( addExpense({
  description: 'new rent',
  amount: 1500
}) );

// store.dispatch( setTextFilter('') );


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app') );
