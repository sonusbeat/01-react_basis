import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import CounterHook from './01-basis/Components/CounterHook';
import CounterReducerComponent from './01-basis/Components/CounterReducerComponent';

ReactDOM.render(
  <React.StrictMode>
    <CounterReducerComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
