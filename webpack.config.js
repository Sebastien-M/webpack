module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: "inline-source-map"
};