import { resolve } from 'path'

import DashboardPlugin from 'webpack-dashboard/plugin'

module.exports = {
  module: {
    rules: [
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
  plugins: [
    new DashboardPlugin()
  ],
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/react')
    },
    symlinks: false
  }
}
