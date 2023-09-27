const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

const resolve = (...args) => require('path').resolve(__dirname, ...args)

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        path: resolve('../dist'),
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
                        // loader: 'ts-loader',
                        loader: 'awesome-typescript-loader',
                        options: {
                            transpileOnly: true // 编译时关闭类型检查，提高编译速度
                        }
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
        }),
        // 关闭 loader 的类型检查，由该插件在独立的进程中做类型检查
        // new ForkTsCheckerWebpackPlugin(),
        new CheckerPlugin() // 功能同上
    ]
}
