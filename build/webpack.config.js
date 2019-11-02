const path = require('path');

module.exports = {
    entry: path.join(__dirname, '..', 'src','/index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'..', 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    }
};