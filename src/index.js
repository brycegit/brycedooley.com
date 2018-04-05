import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const rootEl = document.getElementById('app');

// 
// console.log('here tis', stat);
  
ReactDOM.render(<App />, rootEl);

if (module.hot) {
 module.hot.accept('./App', () => {
	 const NextRootContainer = require('./App').default;
	 ReactDOM.render(<NextRootContainer />, rootEl);
 })
}


/*
TO DO
static react shell made from components in index.html
	try https://github.com/dangw/react-render-plugin and/or https://github.com/markdalgleish/static-site-generator-webpack-plugin
	figure out webpack api & how to get rendered component html
cacheing
move nameScheme to config/lib
svg tutorial

*/