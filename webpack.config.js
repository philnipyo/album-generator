const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                        modules: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}