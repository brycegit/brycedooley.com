const React = require('react');
const ReactDOMServer = require('react-dom/server');
import './global.css';
// import Hello from './components/presentational/Hello';
// import Bye from './components/presentational/Bye';
// import Motion from './components/presentational/Motion/Motion';

const Test = (app, styleSheet, jsFiles) => {
const scriptTags = jsFiles.map(fileName => `<script defer src="${fileName}"></script>`);

  return (
    `<html>
      <head>
        <title>brycedooley.com</title>
        <link href="${styleSheet}" rel="stylesheet">
      </head>
      <body>
      	<div class="header">HERTIS</div>
        <a href="hello.html">GOOO</a>
        <div class="big">Thissss is the main big stuff!</div>
        <div id="app">
          ${app}
        </div>
      </body>
      ${scriptTags.join('')}
    </html>`
  );
}

// const html = ReactDOMServer.renderToString(<App />);

export default Test;



// <Hello message='Seriously, best message ever. Nice work!' />
// 		<Bye message='L8TR!'/>
// 		<Motion />
