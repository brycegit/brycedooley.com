import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import Test from './Test';

import { BrowserRouter, StaticRouter } from 'react-router-dom'

if (typeof global.document !== 'undefined') {
  const rootEl = document.getElementById('app');

  //
  // console.log('here tis', stat);

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), rootEl);

  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextRouter = require('react-router-dom').BrowserRouter;
      const NextRootContainer = require('./App').default;
      ReactDOM.render(
        <NextRouter>
          <NextRootContainer />
        </NextRouter>,
      rootEl);
    })
  }
}

// module.exports = function render(locals) {
//   return '<html>' + locals.greet + ' from ' + locals.path + '</html>';
// };
  module.exports = function render(data) {
    const assetNames = Object.keys(data.webpackStats.compilation.assets);

    const entryName = data.webpackStats.compilation.entrypoints.keys().next().value;

    const cssRegEx = new RegExp(/\.css$/);
    const cssFileNames = getAssetNames(cssRegEx, assetNames, entryName);

    const jsRegEx = new RegExp(/\.js$/);
    const jsFileNames = getAssetNames(jsRegEx, assetNames, entryName);

    // console.log('filenames',cssFileNames,jsFileNames );
    

    // const scriptNames = assetNames.filter(asset => asset.match(jsRegEx));
    // console.log('ss namezzz=>>', stylesheetNames);
    // const mainStyleSheetName = stylesheetNames.find(asset => asset.match(/^app.*css$/));
    // console.log('gonna get that css');
    console.log(data.path);
    
    
    const staticStyles = data.webpackStats.compilation.assets[cssFileNames.core].source();
    // console.log('got that csssss', staticStyles);
    
    const cont = Test(ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={data.path} context={{}}>
      <App />
    </StaticRouter>
    ), cssFileNames, staticStyles, jsFileNames);

    return {[getHtmlFileName(data.path)]: cont};
  };

const getHtmlFileName = path => {
  const fileName = path === '/' ? 
    'index' : 
    path === 'index.html' ? 
    'app' : 
    path.slice(1);
  const fileNameWithExt = fileName + '.html'; 

  return fileNameWithExt;
}

const getAssetNames = (regEx, assetNames, entryName) => {
  const coreRegEx = new RegExp(entryName);

  return assetNames.reduce((types, name) => {
    if(name.match(regEx)) {
      const prop = name.match(coreRegEx) ? 'core' : 'other';
      types[prop] = types[prop] || [];
      types[prop].push(name);
    }
    
    return types;
  }, {});
}

/*
TO DO
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
