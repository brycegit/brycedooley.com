import React from 'react';
import styles from './Hi.css';
import Motion from '../Motion/Motion';

const Hi = ({ message }) => {
	return (
		<div className={styles.bye}>
      <Motion />
			<h1 className='bold'>{message}</h1>
			<p>HEYYYYY</p>
		</div>
	)
}

export default Hi;
