const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '..', 'src','/index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'..', 'dist'),
        publicPath: '/dist'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "./[path][name][hash].[ext]"
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json' ],
    },
    target: 'web'
};
