import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import CounterEffect from './01-basis/Components/CounterEffect';

ReactDOM.render(
  <React.StrictMode>
    <>
      <CounterEffect />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
