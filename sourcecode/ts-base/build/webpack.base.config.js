const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const resolve = (...args) => require('path').resolve(__dirname, ...args)

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        // alias: {
        //     '@': resolve('../src')
        // }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CopyPlugin({
            patterns: [
                resolve('../src/2.project/04.libs/global-lib.js')
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
            // chunks: ['app']
        })
    ]
}
