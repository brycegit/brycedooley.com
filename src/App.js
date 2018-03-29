import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Hello from './components/presentational/Hello';
import Bye from './components/presentational/Bye';

const App = () => (
	<React.Fragment>
		<Hello message='Seriously, best message ever. Nice work!' />
		<Bye message='L8TR!'/>
	</React.Fragment>
);
  
export default App;

  
  
