import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './Login';
import { Route, Router, hashHistory } from'react-router';
import WrappedNormalLoginForm from './Login';
import registerServiceWorker from './registerServiceWorker';
import '../src/index.css';
import MyRoute from './Routes/MyRoute';

ReactDOM.render(<MyRoute />,document.getElementById('root'));
registerServiceWorker();

