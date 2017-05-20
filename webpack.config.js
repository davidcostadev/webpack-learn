var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'www'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css')
    ],
    devServer: {
        contentBase: path.join(__dirname, 'www'),
    },
    devtool: 'source-map',
}

if (process.env.NODE_ENV === 'developmentHot') {
    module.exports.module.rules = (module.exports.module.rules || []).concat([
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }
    ]);
} else if (process.env.NODE_ENV === 'developmentPhonegap') {
    module.exports.module.rules = (module.exports.module.rules || []).concat([
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }],
                // use style-loader in development
                fallback: "style-loader"
            }),
        },
    ]);
}
