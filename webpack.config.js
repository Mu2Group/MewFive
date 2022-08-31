const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    // development mode tells it to stop minifying
    mode: "development",
    entry: "./client/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
    },
    // devServer: {
    //     host: 'localhost',
    //     port: 8080,
    //     // match the output path
    //     static: {
    //       directory: path.resolve(__dirname, 'dist'),
    //       // match the output 'publicPath'
    //       publicPath: '/',
    //     },
    //     // enable HMR on the devServer
    //     hot: true,
    //     // fallback to root for other urls
    //     historyApiFallback: true,
    //     headers: { 'Access-Control-Allow-Origin': '*' },
    //     proxy: {
    //       '*': {
    //         target: 'http://localhost:3000/',
    //         secure: false,
    //         changeOrigin: true
    //       },
    //     },
    //   },
    devtool: 'inline-source-map',
    devServer: {
      static: {
          directory: path.join(__dirname, 'build'),
      },
      hot: true,
      proxy: {
        '/': 'http://localhost:3000'
      },
      compress: true,
      port: 8080,
    },
    module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react']
        },
    },
        {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
        test: /\.(png|jpg|jpe?g|svg|gif)?$/,
        use: 'url-loader',
        }
    ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: path.resolve(__dirname, './index.html'),
          filename: 'index.html',
        }),
      ],
}
  
  