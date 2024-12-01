import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import path from 'path';

const prodConfig: Configuration = {
  mode: 'production', 
  output: {
    path: path.resolve(__dirname, '../dist'),  
    filename: 'gstfly.[contenthash].js',     
    publicPath: './',
  },  
  plugins: [
    new CleanWebpackPlugin(), 
    new Dotenv({ path: './.env' }),  
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',   
    },
    runtimeChunk: 'single',  
  },
};

export default merge(commonConfig, prodConfig);  