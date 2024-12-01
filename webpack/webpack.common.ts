import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const commonConfig: Configuration = {
  entry: './src/index.tsx',   
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],  
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,  
        exclude: /node_modules/,
        use: 'babel-loader',  
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Or MiniCssExtractPlugin.loader for production
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,   
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,  
        use: 'ts-loader',   
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].[fullhash].css'}),
    new HtmlWebpackPlugin({
      template: './src/index.html',  
    }),
  ],
};

export default commonConfig;