module.exports = {
    entry: "./src/react-radio-button-group.jsx",
    output: {
        filename: 'bundle.js',
        library: 'ReactRadioGroup',
        libraryTarget: 'umd',
        path: 'build'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["react", "es2015-ie"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
