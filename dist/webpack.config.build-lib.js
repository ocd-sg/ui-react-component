var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var path = require('path');
var baseConfig = require('./webpack.config.base');
module.exports = __assign({}, baseConfig, { devtool: false, context: path.resolve(__dirname, 'src/lib'), entry: [
        path.resolve(__dirname, 'src/lib/index.js')
    ], output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.min.js',
        library: 'ui-react-core',
        libraryTarget: 'umd'
    }, externals: __assign({}, baseConfig.externals, { react: true, 'react-dom': true }), plugins: baseConfig.plugins.slice(), target: 'web' });
