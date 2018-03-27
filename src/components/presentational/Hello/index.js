import React from 'react';
import './Hello.css';

const Hello = ({ message }) => {
	return (
	<div className='hello'>
		<div className='big'>This is the main big stuff!</div>
		<h1>{message}</h1>
		<h2>{message}</h2>
		<h3>{message}</h3>
		<p>This is the cool stuff here. This is the cool stuff here. This is the cool stuff here. This is the cool stuff here.</p>
	</div>
	)	
}

export default Hello;