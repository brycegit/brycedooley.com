import React, { Component } from 'react';
// import ReactDOMServer from 'react-dom/server';
import styles from './global.css';
import Hello from './components/presentational/Hello';
import Bye from './components/presentational/Bye';
import Another from './components/presentational/Another';
import Hi from './components/presentational/Hi';
import OneMore from './components/presentational/OneMore';
import Test from './Test';
// import Motion from './components/presentational/Motion/Motion';

import { Route, Link } from 'react-router-dom'

class App extends Component {
  state = { show: false }
  click = () => {
    console.log('HIT');
    this.setState({show: true})
  }

  componentDidMount() {
    console.log('yoyyo');
    
    // this.setState({ show: true });
  }

  render() {
    return 	(
      <div>
        <Link to='/'>HOME</Link>
        <Link to='/hi'>HI</Link>
        <Link to='/bye'>BYE</Link>
        <Link to='/hello'>Hello</Link>
        <Link to='/om'>om</Link>
        <div className={styles.red}>Hey I;m the header :>>//??</div>
        <Route exact path ='/' component={Another} />
        <Route path ='/hi' component={Hi} />
        {/* <Route path ='/bye' component={Bye} /> */}
        <Route path ='/hello' render={() => <Hello message={'Oh hey this is what I wanna tell you!'} />} />
        <Route path ='/om' component={OneMore} />
      </div>
      // <div>
      //   <Hello message='Seriously, best message ever. Nice work!!' />
      //   {this.state.show && <Bye />}
      //   {this.state.show && <Hi />}
      //   <div onClick={this.click}>clck</div>
      // </div>
    )
  }
}



export default App;
