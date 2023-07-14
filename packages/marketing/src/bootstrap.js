import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import CounterFunctional from './components/CounterFunctional';

const mountApp = (el) => {
  ReactDOM.render(<App />, el);
};

const mountCounterFunctional = (el) => {
  ReactDOM.render(<CounterFunctional />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot);
  }
}

export { mountApp, mountCounterFunctional };
