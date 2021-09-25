const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    target: 'web',
    entry: {
        app: ['./src/Index.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'asa'),
        filename: 'js/[name].bundle.js',
        crossOriginLoading: "anonymous"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", "postcss-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|jpg|png)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
        }),
        HtmlWebpackPluginConfig,
        new webpack.NoEmitOnErrorsPlugin(),
        new CompressionPlugin(),
        new webpack.DefinePlugin({
            'PURE_STAKE_API_KEY': JSON.stringify(process.env.PURE_STAKE_API_KEY)
        })
    ],
}