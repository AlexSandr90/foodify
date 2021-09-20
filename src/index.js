import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./component/app";
import store from './redux/store';


ReactDOM.render(
    <App state={store} />,
    document.getElementById('root')
);
