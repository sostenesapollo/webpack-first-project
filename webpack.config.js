const path = require("path")
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
    	new MinifyPlugin()
  	]
}