import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/app';
import thunk from 'redux-thunk';

ReactDOM.render(
               <Provider store={createStore(reducer)}>
               <App />
               </Provider> , document.getElementById('root'));
