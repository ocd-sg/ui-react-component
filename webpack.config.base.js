const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        include: resolve(__dirname, 'src'),
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {}
  },
  externals: {},
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  stats: 'minimal'
}
