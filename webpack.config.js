const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
        /*
        // use se koristi kada ima vise loadera
        use: {
          loader: "babel-loader",
          options: {
          presets: ["@babel/preset-env"]
          }
        }
        */
      }
    ]
  }
};
