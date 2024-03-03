const path = require('path')


console.log(__dirname);

module.exports = {
    entry: {'bundle': './src/index.tsx'},
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'my-first-webpack.bundle.js',
      },
    module: {
      rules: [
        {
          test: /\.css$/i,
          loader: "css-loader",
          options: {
            modules: true,
          },
          
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          type: "asset/resource"
        },
        { test: /\.ts$/, use: 'ts-loader' },
        { test: /\.html$/, use: 'html-loader' },
      ]
    },
    
    mode: 'development'
}