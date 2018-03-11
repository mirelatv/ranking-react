import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/App'

function reducer() {
  return 'State';
}

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(
  <App />, document.getElementById('root')
);