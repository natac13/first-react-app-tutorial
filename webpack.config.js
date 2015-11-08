'use strict';

var path = require('path');

var buildPath = path.join(__dirname, 'public');
module.exports = {
    entry: './app/App.js',
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/assets/' // need for hot reload
    },
    devServer: {
        inline: true,
        progress: true,

        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};