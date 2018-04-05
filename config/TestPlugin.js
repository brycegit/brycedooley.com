const React = require('react');
const ReactDOMServer = require('react-dom/server');
const eval = require('eval');

function MyPlugin() {}

MyPlugin.prototype.apply = function(compiler) {
	compiler.plugin("compilation", function(compilation) {
			//the main compilation instance
			//all subsequent methods are derived from compilation.plugin
			compilation.plugin('succeed-module', function(module){
//     console.log('succeed module -------->');
    if(module.issuer && module.issuer._source) {
//         module.issuer && module.issuer._source && console.log(module.issuer.userRequest, module.issuer._source._value);
		const target = 'Motion.js';
		
		const end = module.issuer.userRequest.slice(-9);
		
		console.log('End.........', end);
		
		if(end === 'Motion.js') {
		const code = eval(module.issuer._source._value, true).default;
// 			console.log('code', code)
			const text = ReactDOMServer.renderToString(React.createElement(code));
			console.log(text)
		} 
    }
		
});
	});
};

module.exports = MyPlugin;

