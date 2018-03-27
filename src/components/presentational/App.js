import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Hello from './Hello';
import Bye from './Bye';

const App = () => {
	return (
			<React.Fragment>
				<Hello message='Seriously, best message ever. Nice work.' />
				<Bye />
			</React.Fragment>
		)
}
  
export default App;

  
  
