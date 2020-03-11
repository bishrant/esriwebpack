const ArcGISPlugin = require("@arcgis/webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    index: ["./src/main.ts"]
  },
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: ""
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: false,
        parallel: true,
        sourceMap: false,
        
        terserOptions: {
          mangle: true,
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunksSortMode: "none"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new ArcGISPlugin(),
    new CleanWebpackPlugin()

  ],
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};