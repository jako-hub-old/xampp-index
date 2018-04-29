const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    mode: 'development',
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
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};