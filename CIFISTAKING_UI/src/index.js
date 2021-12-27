import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import CSS here
import "./assets/scss/custom.scss";
import "./assets/css/style.css"
import"./views/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);