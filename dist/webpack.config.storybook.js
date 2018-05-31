var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var resolve = require('path').resolve;
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = function (baseConfig) { return (__assign({}, baseConfig, { module: {
        rules: baseConfig.module.rules.concat([
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
        ])
    }, plugins: baseConfig.plugins
        .reduce(function (memo, plugin) { return (plugin instanceof UglifyJsPlugin
        ? memo.concat([
            new UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    comparisons: false
                }
            })
        ]) : memo.concat([plugin])); }, [])
        .concat(process.env.NODE_ENV === 'development' ? new DashboardPlugin() : null)
        .filter(function (d) { return d; }), resolve: __assign({}, baseConfig.resolve, { alias: {
            react: resolve(__dirname, 'node_modules/react')
        }, symlinks: false }) })); };
