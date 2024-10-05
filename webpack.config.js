const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), 
        clean: true,
        assetModuleFilename: 'images/[name][ext]'    
    },
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',            
            filename: 'index.html',
            inject: 'head',
            scriptloading: 'defer',
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: "images"}
            ]
        })
    ]
};