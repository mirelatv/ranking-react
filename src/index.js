import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import 'jquery';
import './index.css';
import App from './App';
import app from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(app)

const render = () => ReactDOM.render(<App 
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
/>, document.getElementById('root'));
registerServiceWorker();

render();
store.subscribe(render)
