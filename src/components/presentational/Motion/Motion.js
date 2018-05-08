require('babel-register')

import React, { Component } from 'react';
import { tween, styler } from 'popmotion';
import styles from './motion.css';
import posed, { PoseGroup } from 'react-pose';

const Rocket = () => {
	return (
		<div className={styles.cont}>
			<div className={styles.rocket}>
				<div className={styles.base}>
					<div className={`${styles.base} ${styles.center}`}></div>
					<div className={`${styles.base} ${styles.window}`}></div>
					<div className={`${styles.base} ${styles.exhaust}`}></div>
					<div className={`${styles.base} ${styles.flame}`}></div>
				</div>
				<div className={styles.fin}>
					<div className={styles.fin + " " + styles.left}></div>
					<div className={styles.fin + " " + styles.right}></div>
				</div>
			</div>
		</div>
	// <div>Rocket</div>
	)
}

class Motion extends Component {
	state = {
		isVisible: false
	};
	
	poseProps = {
		right: { 
// 			right: '100px',
			left: '120%',
			top: '-45%',
			bottom: '100%',
			transition: (props) => tween({ ...props, duration: 10000 })
		},
		left: {
			left: '-100px',
			buttom: '0%',
			top: '100%',
			transition: (props) => tween({ ...props, duration: 10000 })
		}
	}
	
	Box = posed.div(this.poseProps)
	
	render() {
		const BoxComponent = this.Box;
	
		return (
			<BoxComponent pose={this.state.isVisible ? 'right' : 'left'}>
				<div>lookathis</div>
				<Rocket />
			</BoxComponent>
		)
	}
	
	componentDidMount() {
		// setTimeout(() => this.setState({isVisible: !this.state.isVisible}), 3500);
	}
}

export default Motion;