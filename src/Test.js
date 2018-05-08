const React = require('react');
const ReactDOMServer = require('react-dom/server');
import './global.css';
// import Hello from './components/presentational/Hello';
// import Bye from './components/presentational/Bye';
// import Motion from './components/presentational/Motion/Motion';

const Test = (app, cssFiles, staticStyles, jsFiles) => {
  console.log('started', app, cssFiles, staticStyles, jsFiles);
  
const coreScriptTags = jsFiles.core.map(fileName => `<script defer src="${fileName}"></script>`);
const deferScriptTags = jsFiles.other.map(fileName => `<script defer src="${fileName}"></script>`);
const scriptTags = coreScriptTags.concat(deferScriptTags);

const styleLinks = cssFiles.other.map(styleSheet => `<link href="${styleSheet}" rel="stylesheet" />`);
console.log(scriptTags, styleLinks, staticStyles);

  return (
    `<html>
      <head>
        <title>brycedooley.com</title>
         
        <style>
          ${staticStyles}
        </style>
      </head>
      <body>
        <div id="app">
          ${app}
        </div>
      </body>
      ${coreScriptTags.join('')}
    </html>`
  );
}

// const html = ReactDOMServer.renderToString(<App />);

export default Test;



// <Hello message='Seriously, best message ever. Nice work!' />
// 		<Bye message='L8TR!'/>
// 		<Motion />
