import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('app');
  
ReactDOM.render(<App />, rootEl);

 if (module.hot) {
   module.hot.accept('./App', () => {
     const NextRootContainer = require('./App').default;
     ReactDOM.render(<NextRootContainer />, rootEl);
   })
 }

/*
TO DO
Tree shaking
Autoprefix
Dev/prod versions
*/