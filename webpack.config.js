module.exports = {
    entry: "./src/index.js",

    output: {
        filename: "public/bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['stage-2']
                }
            }
        ]
    },

    devtool: 'inline-source-map'
};
