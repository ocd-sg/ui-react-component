var resolve = require('path').resolve;
var webpack = require('webpack');
module.exports = {
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                include: resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    },
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
};
