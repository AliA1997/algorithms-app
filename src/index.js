import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import router for configuring your routes. 
import { BrowserRouter as R } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<R><App /></R>, document.getElementById('root'));
registerServiceWorker();
