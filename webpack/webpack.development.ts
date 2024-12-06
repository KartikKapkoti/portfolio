import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import 'webpack-dev-server';
import path from 'path';

const devConfig: Configuration = {
  mode: 'development',   
  devtool: 'inline-source-map',  
  output: {
    path: path.resolve(__dirname, '../dist'),  
    filename: 'portfolio.[contenthash].js',     
    publicPath: '/',
  },
  devServer: {
    static: './dist',           
    historyApiFallback: true,  
    port: 3000,                 
    hot: true,               
  },
};

export default merge(commonConfig, devConfig); 