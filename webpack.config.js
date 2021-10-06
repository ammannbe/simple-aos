const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src/js/aos.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "aos.js",
        library: {
            name: "AOS",
            type: "umd",
            export: ['default']
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    mode: "production",
}
