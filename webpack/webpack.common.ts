import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
    entry: path.join(__dirname, '..', 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
        modules: [path.resolve(__dirname, '../src'), '../node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-syntax-dynamic-import'],
                    },
                },
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',  
                'css-loader',
                'sass-loader'
              ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 300 * 1024, // 300kb
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            publicPath: '/',
            template: path.join(__dirname, '..', 'src', 'index.html'),
        }),
        new Dotenv({
            path: path.join(__dirname, '..', '.env'),
            systemvars: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
}

export default config