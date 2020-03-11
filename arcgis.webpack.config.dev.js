const ArcGISPlugin = require("@arcgis/webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = {
  plugins: [
    new ArcGISPlugin({
      features: {
        "3d": false
      }
    }),

  ],
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};