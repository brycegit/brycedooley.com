import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import Test from './Test';

import { BrowserRouter as Router } from 'react-router-dom'

if (typeof global.document !== 'undefined') {
  const rootEl = document.getElementById('app');

  //
  // console.log('here tis', stat);

  ReactDOM.render((
    <Router>
      <App />
    </Router>
  ), rootEl);

  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextRootContainer = require('./App').default;
      ReactDOM.render(<NextRootContainer />, rootEl);
    })
  }
}

// module.exports = function render(locals) {
//   return '<html>' + locals.greet + ' from ' + locals.path + '</html>';
// };
// try {
//   module.exports = function render(data) {
//     const js = Object.keys(data.webpackStats.compilation.assets);
//     // console.log('yea>>', data.webpackStats);
//     const assetNames = Object.keys(data.webpackStats.compilation.assets);
//     // console.log(assetNames);
//     const entryName = data.webpackStats.compilation.entrypoints.keys().next().value;

//     const entryRegEx = new RegExp(entryName, 'g', '.css', '$');
//     // const jsEntryRegEx = new RegExp(entryName, 'g', '.js', '$');

//     const stylesheetName = assetNames.find(asset => asset.match(entryRegEx));
//     const scriptNames = assetNames.filter(asset => asset.slice(-2) === 'js');
//     console.log('hrrrrr=>>', scriptNames);
//     // const css = data.webpackStats.compilation.assets['styles.css'].source();
//     const cont = Test(ReactDOMServer.renderToStaticMarkup(<App />), stylesheetName, scriptNames);
//     return {
//       '/': cont,
//       '/hello.html': '<html>World</html>'
//       // '/world': '<html>World</html>'
//     };
//   };
// } catch(e) {
//   console.log('err in index.js', e);
// }



/*
TO DO
cacheing / try to pull in dynamic file names for cacheing
  read webpack doc and try to set up vendor stuff correctly
  then try to set up ssr while keeping structure in tact
whaat does this do? new webpack.HashedModuleIdsPlugin(),
move nameScheme to config/lib
add second page
see if config works on both dev and prod webpack configs
clean up (style names, comments)
good fix for static webpack plugin issue
look at need for coomon chunks...rewatch vid to see if my vendor  files are bing chunked

rendering ex: https://jaketrent.com/post/react-routing-static-site-browser/

write article
finish svg tutorial
webpack deep dive
*/
