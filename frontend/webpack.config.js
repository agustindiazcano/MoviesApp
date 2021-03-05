module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/../backend/public",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    context: __dirname,
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react", "@babel/env"],
                },

            },
            {
                test: /.(css|sass|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
                use: {
                    loader: 'url-loader?limit=100000',
                },
            },

        ],
    },

    devtool: "source-map",
};