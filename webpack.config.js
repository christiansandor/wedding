const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'front', 'styles.scss'),
    output: {
        path: resolve('./public/dist'),
        publicPath: '/public/dist/',
    },
    watchOptions: {
        ignored: ['public/dist/**/*', 'node_modules'],
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
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        }],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('public/index.html'),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
