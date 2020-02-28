const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = 'webpack-build';

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        publicPath: "/",
        filename: '[name].js',
        chunkFilename: "[name].chunk.js",
        path: path.join(__dirname, DIST_DIR)
    },
    devtool: 'source-map',
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ]
    },
    module: {
        rules: [
        // Style loaders
        { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
        { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
        // All files with a '.ts' or '.tsx' extension will be ts-linted
			{
				test: /\.(ts|tsx|properties)$/,
				enforce: "pre",
				use: [
					{
						options: {
							eslintPath: require.resolve("eslint")
						},
						loader: require.resolve("eslint-loader")
					}
				],
				exclude: /node_modules/
			},
        // TS loader
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        // JS loader
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
            }
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        contentBase: path.join(__dirname, DIST_DIR),
        compress: true,
        port: 3000,

        // Allow access to dev proxy from external boxes
        host: '0.0.0.0',
        disableHostCheck: true
    },
    plugins: [
        new CleanWebpackPlugin(), // Defaults to cleaning output.path
        new HtmlWebpackPlugin({
        template: './public/index.html'
        })
    ]
};
