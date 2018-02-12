module.exports = {
    entry: './block.jsx',
    output: {
        path: __dirname,
        filename: 'block.build.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};