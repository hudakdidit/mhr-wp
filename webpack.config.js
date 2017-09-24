const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const package = require('./package.json');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname,
        filename: "./static/site.js"
    },
    module: {
        loaders: [
            {   
                test: /\.css$/, 
                loader: "style!css" 
            }
        ],
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test:   /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!stylus-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./static/site.css'),
        new BrowserSyncPlugin({
            proxy: package.localUrl,
            files: ['./static', './templates'],
            open: false,
            tunnel: "mariah"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    use: [
                        poststylus([ 'autoprefixer' ])
                    ]
                },
            }
        })
    ],
    externals: {
        "jquery": "jQuery",
        "jquery": "$"
    }
};
