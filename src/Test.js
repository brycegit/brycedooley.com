const React = require('react');
const ReactDOMServer = require('react-dom/server');
import './global.css';
// import Hello from './components/presentational/Hello';
// import Bye from './components/presentational/Bye';
// import Motion from './components/presentational/Motion/Motion';

const Test = (app, styleSheet, inlineCss) => (
  `<html>
    <head>
      <title>brycedooley.com</title>
      <link href="${styleSheet}" rel="stylesheet">
    </head>
    <style>${inlineCss}</style>
    <body>
    	<div class="header"><%= htmlWebpackPlugin.options.title %></div>
      <a href="hello.html">GOOO</a>
      <div class="big">Thissss is the main big stuff!</div>
      <div id="app">
        ${app}
      </div>
    </body>
    <script src="app.js"></script>
  </html>`
);

// const html = ReactDOMServer.renderToString(<App />);

export default Test;



// <Hello message='Seriously, best message ever. Nice work!' />
// 		<Bye message='L8TR!'/>
// 		<Motion />
