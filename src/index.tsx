import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './01-basis/Components/Counter';
import CounterBy from './01-basis/Components/CounterBy';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <>
      <CounterBy />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
