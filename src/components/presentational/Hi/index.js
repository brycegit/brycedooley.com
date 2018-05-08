import React from 'react';
import styles from './Hi.css';
// import Motion from '../Motion/Motion';
import Loadable from 'react-loadable';

const LoadableMotion = Loadable({
  loader: () => import(/* webpackChunkName: "Hi" */ '../Motion/Motion'),
  loading: () => <div>Loading...</div>
});

class Hi extends React.Component {
  state = {
    show: false
  }

  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    const { message } = this.props;

    return (
      <div className={styles.thetest}>
        {this.state.show && <LoadableMotion />}
        <h1 className='bold'>{message}</h1>
        <p>HEYYYYY</p>
      </div>
    )
  }
}

export default Hi;
