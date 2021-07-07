import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from './App';
import './index.scss';

ReactDOM.render(
  <Provider {...{ store }}>
    <React.StrictMode>
      <AnimateSharedLayout>
        <App />
      </AnimateSharedLayout>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
