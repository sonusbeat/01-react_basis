import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import CounterHook from './01-basis/Components/CounterHook';

ReactDOM.render(
  <React.StrictMode>
    <>
      <CounterHook />
      <div className="mb-5"></div>
      <CounterHook />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
