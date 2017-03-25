const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/site.js",
    output: {
        path: __dirname,
        filename: "./static/site.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./static/site.css')
    ]
};
