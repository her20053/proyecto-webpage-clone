const path = require('path')
const ruleForStyles = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
}
module.exports = {
	// entry: './src/index.js' <- Esta es la entrada por defecto
	mode: "development",
	devServer: {
		static: "./build",
	},
	output: {
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-react',
							{
								runtime: 'automatic'
							}
						]
					]
				}
			}, ruleForStyles,
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file-loader',
				]
			}
		]
	}
}
