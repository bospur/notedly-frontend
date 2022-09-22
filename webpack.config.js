const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new Dotenv({
      path: "./.env", // load this now instead of the ones in '.env'
    }),
  ],
};