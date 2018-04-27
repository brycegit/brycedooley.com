import React from 'react';
import styles from './OneMore.css';

const OneMore = ({ message }) => {
	return (
	<div className={styles.OneMore}>
		<div className={'header'}>OM</div>
		<h1>{message}</h1>
		<h2>{message}</h2>
		<h3>{message}</h3>
		<p>One More Kiuhd</p>
	</div>
	)
}

export default OneMore;
