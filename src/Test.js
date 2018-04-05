const React = require('react');
const ReactDOMServer = require('react-dom/server');
import './global.css';
// import Hello from './components/presentational/Hello';
// import Bye from './components/presentational/Bye';
// import Motion from './components/presentational/Motion/Motion';

const Test = () => (
	<React.Fragment>
		<div>Hey Im looookin for you!!</div>
	</React.Fragment>
);
  
// const html = ReactDOMServer.renderToString(<App />);

export default Test;

  
  
// <Hello message='Seriously, best message ever. Nice work!' />
// 		<Bye message='L8TR!'/>
// 		<Motion />