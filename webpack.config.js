const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const PATHS = {
  src: path.join(__dirname, 'src')
}

const devMode = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'buildDev'
const cssDev = ['style-loader', 'css-loader', { loader: 'sass-loader', options: { implementation: require('sass') } }];
const cssProd =  [MiniCssExtractPlugin.loader, 'css-loader', { loader: 'sass-loader', options: { implementation: require('sass') } }]
const cssConfig = devMode ? cssProd : cssDev;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(scss)$/, use: cssConfig,},      
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: '[path][name].[ext]',
             /*  outputPath: 'images/', */
              limit: 8159,
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'svg/',
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/',
              limit: 8159,
            }
          }
        ]
      },
      {  test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
        }]
      },
      {  test: /\.(pdf)$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'files/'
          }
        }]
      },
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    }),
  /*  new ImageminPlugin({
      maxFileSize: 10000, 
      jpegtran: { progressive: false }
    }),
    new ImageminPlugin({
      minFileSize: 10000, 
      jpegtran: { progressive: true }
    }), */
  ],
 optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({}),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        vendor: {
          chunks: 'all',
          test: /node_modules/,
          priority: 20
        },
        // common chunk
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  devServer: {
    compress: true,
    stats: "errors-only",
    open: false,
    inline: true,
    hot: true,
    port: 6012,
    historyApiFallback: true
  }
}