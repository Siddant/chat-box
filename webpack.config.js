const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    devServer: {
        contentBase: ['src'],
        watchContentBase: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                secure: false
            }
        }
    },
    plugins: [
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        })

    ]
}

