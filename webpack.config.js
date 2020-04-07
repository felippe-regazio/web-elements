const glob = require('glob');
const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');
rimraf(path.join(DIST_PATH), () => {});

module.exports = {
    entry: glob.sync('./src/**/*.js'),
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                            options: {
                            presets: ['@babel/preset-env']
                        }
                    }, 
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: process.argv.includes('--fix')
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },            
        ]
    },
    plugins: [
        new MinifyPlugin()
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
    }, 
    output: {
        path: DIST_PATH,
        filename: 'elements.min.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        libraryExport: 'default'
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000,
        index: 'examples.html'
    }
}