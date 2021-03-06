import React from 'react';
import styles from './Bye.css';
import Motion from '../Motion/Motion';

const Bye = ({ message }) => {
	return (
		<div className={styles.bye}>
      <Motion />
			<h1 className='bold'>{message}</h1>
			<p>Cya</p>
		</div>
	)	
}

export default Bye;
