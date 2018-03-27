import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/presentational/App';
  
ReactDOM.render(<App />, document.getElementById('app'));

/*
TO DO
Set up global inline styles & html that can be applied immediately on root page load
	Critical CSS plugin - https://github.com/anthonygore/html-critical-webpack-plugin
	Code splitting via webpack docs - https://webpack.js.org/guides/code-splitting/
Autoinline bundle
Hot reload
Tree shaking
Autoprefix
*/