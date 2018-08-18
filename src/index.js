import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import router for configuring your routes. 
import { BrowserRouter as R } from 'react-router-dom';
//import your Provider and store from react redux and store.js file.
import { Provider } from 'react-redux';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><R><App /></R></Provider>, document.getElementById('root'));
registerServiceWorker();
