const path = require('path');


module.exports = {
    entry: {
        app: `./themes/sample/js/app.js`,
    },
    output: {
      filename: "js/[name].js",
      path: path.resolve('../wp-content/themes/sample'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                ]
              }
            }
          ]
        }
      ]
    }
  };