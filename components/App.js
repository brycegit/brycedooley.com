import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './presentational/Hello';

const App = () => {
	return <Hello />
}
  
ReactDOM.render(<App />, document.getElementById('app'));

// TO DO
// Pick out accessible font
// Set up global inline styles & html that can be applied immediately on root page load
// Autoinline bundle
  
  
