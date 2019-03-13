const {resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'front', 'styles.scss'),
    output: {
        path: resolve('./public/dist'),
    },
    watchOptions: {
        ignored: ['public/dist/**/*', 'node_modules'],
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
    ],
};
