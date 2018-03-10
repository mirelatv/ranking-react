import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import app from './reducers';

const store = createStore(app);

ReactDOM.render(
        <App 
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />, document.getElementById('root'));
registerServiceWorker();


