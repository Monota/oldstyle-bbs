const path = require("path");

const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    entry: path.join(__dirname, "src", "public", "scripts", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'main.js'
    },
    devServer: {
        contentBase: "dist",
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false, sourceMap: enabledSourceMap }
                    }
                ]
            }
        ]
    }
};
