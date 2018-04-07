import React from 'react';
import styles from './Hello.css';

const Hello = ({ message }) => {
	return (
	<div className={styles.hello}>
		<div className={'header'}>Thissss is the main big stuff!</div>
		<h1>{message}</h1>
		<h2>{message}</h2>
		<h3>{message}</h3>
		<p>This is the coolest stuff here. This is the cool stuff here. This is the cool stuff here. This is the cool stuff here.</p>
	</div>
	)
}

export default Hello;
