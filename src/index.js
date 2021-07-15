import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './ui/App';
import reportWebVitals from './reportWebVitals';
import Store from "./store";

ReactDOM.render(
  <React.StrictMode>
      <Store>
          <App/>
      </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
