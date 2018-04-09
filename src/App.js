import React, { Component } from 'react';
// import ReactDOMServer from 'react-dom/server';
import './global.css';
import Hello from './components/presentational/Hello';
import Bye from './components/presentational/Bye';
import Test from './Test';
import Motion from './components/presentational/Motion/Motion';
const b = false;
class App extends Component {
  state = { show: false }
  click = () => {
    console.log('HIT');
    this.setState({show: true})
  }
  render() {
    return 	(<React.Fragment>
    		<Hello message='Seriously, best message ever. Nice work!!' />
    	  {this.state.show && <Bye />}
        <div onClick={this.click}>clck</div>
    	</React.Fragment>)
  }
}



export default App;
