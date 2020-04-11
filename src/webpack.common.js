
module.exports = {
    entry: {
        app: `./src/js/app.js`,
    },
    output: {
      filename: "js/[name].js",
      // path: path.resolve(__dirname + '/docs'),
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