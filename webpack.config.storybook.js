const { resolve } = require('path')
const webpack = require('webpack')

const DashboardPlugin = require('webpack-dashboard/plugin')
const { UglifyJsPlugin } = webpack.optimize

module.exports = (baseConfig) => ({
  ...baseConfig,
  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /(\.css)$/,
        include: resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: baseConfig.plugins
    .reduce((memo, plugin) => (
      plugin instanceof UglifyJsPlugin
        ? [
          ...memo,
          new UglifyJsPlugin({
            sourceMap: true,
            compress: {
              comparisons: false
            }
          })
        ]
        : [ ...memo, plugin ]
    ), [])
    .concat(process.env.NODE_ENV === 'development' ? new DashboardPlugin() : null)
    .filter((d) => d),
  resolve: {
    ...baseConfig.resolve,
    alias: {
      react: resolve(__dirname, 'node_modules/react')
    },
    symlinks: false
  }
})
