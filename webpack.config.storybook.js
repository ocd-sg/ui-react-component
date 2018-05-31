const { resolve } = require('path')
const webpack = require('webpack')

const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = (baseConfig) => ({
  ...baseConfig,
  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.tsx?$/,
        include: resolve(__dirname, 'src'),
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/,
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
  plugins: process.env.NODE_ENV === 'development'
    ? [ ...baseConfig.plugins, new DashboardPlugin() ]
    : baseConfig.plugins,
  resolve: {
    ...baseConfig.resolve,
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    alias: {
      react: resolve(__dirname, 'node_modules/react')
    },
    symlinks: false
  }
})
