const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: resolve('./front/js/main.js'),
    },
    output: {
        filename: 'main.js',
        path: resolve('./public/dist'),
    },
    watchOptions: {
        ignored: ['public/**/*', 'node_modules'],
    },
    devServer: {
        contentBase: resolve('./'),
        watchContentBase: true,
        port: 9000,
        hot: true,
        inline: true,
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'sass-loader', // compiles Sass to CSS, using Node Sass by default
            ],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('public/index.html'),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
