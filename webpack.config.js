const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body',
});
const mode = 'production';
module.exports = {
    mode: mode,
    performance: {
        hints: false,
    },
    context: __dirname + '/src',
    entry: './app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                //include: './',
                use: [{loader: 'url-loader'}]
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};