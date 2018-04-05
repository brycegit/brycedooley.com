import React from 'react';
import styles from './Bye.css';

const Bye = ({ message }) => {
	return (
		<div className={styles.bye}>
			<h1 className='bold'>{message}</h1>
			<p>Cya</p>
		</div>
	)	
}

export default Bye;
