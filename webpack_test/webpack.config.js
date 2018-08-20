const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'none',
    entry: {
        visitor: './src/visitor/visitor.ts',
        admin: './src/admin/admin.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /\.(js|ts)$/,
                    chunks: 'all',
                    minChunks: 2,
                    name: 'common',
                    enforce: true
                },
            },
        },
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {url: false, sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {presets: ['es2015']}
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['es2015']}
                }
            }
        ]
    }
};