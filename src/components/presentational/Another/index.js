import React from 'react';
import styles from './Another.css';

const Another = ({ message }) => {
	return (
	<div className={styles.Another}>
		<div className={'header'}>ADNOTHER</div>
		<h1>{message}</h1>
		<h2>{message}</h2>
		<h3>{message}</h3>
		<p>OMG IT'S ANOTHER</p>
	</div>
	)
}

export default Another;
