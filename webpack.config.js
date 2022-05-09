const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dev = process.env.NODE_ENV.trim() === "development";
console.clear()
console.log("\x1b[32m%s\x1b[0m", `✔️ Bundling for ${dev ? "development" : "production"} environement.`);

let config = {
    watch: dev,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist/index.html'),
        },
        port: 9000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src/")
        },
        extensions: ["", ".ejs", ".js", ".jsx", ".ts", ".tsx"],
    },
    entry: {
        Frontend: "./src/index",
    },
    output: {
        filename: dev ? "js/[name].js" : "js/[chunkhash:8].js",
        path: path.resolve(__dirname, "./dist/"),
        publicPath: dev ? process.env.DEV_PUBLIC_PATH : process.env.PROD_PUBLIC_PATH,
        assetModuleFilename: '[hash][ext][query]'
    },
    devtool: dev === true ? "cheap-module-source-map" : "source-map",
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: "ejs-loader",
                        options: {
                            esModule: false,
                        },
                    },
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                include: [
                    path.resolve(__dirname, "./src/Styles/general.scss")
                ],
            },

            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            }
                        },
                    },
                    "sass-loader"
                ],
                exclude: [
                    path.resolve(__dirname, "./src/Styles/general.scss")
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
            {
                test: /\.(mp3|webm|mp4)$/,
                type: "asset/resource",
                generator: {
                    filename: 'media/[hash][ext][query]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                type: "asset/resource",
                generator: {
                    filename: 'img/[hash][ext][query]'
                }
            }
        ],
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: dev ? 'css/[name].css' : 'css/[chunkhash:8].css',
            chunkFilename: '[chunk].css',
        }),

        new CleanWebpackPlugin({
            verbose: true,
            dry: true,
        }),

        /**
         * This is the Frontend page
         */
        new HtmlWebpackPlugin({
            template: "./src/Layout.ejs",
            filename: "index.html",
            chunks: ["Frontend"],
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),


        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
        }),
    ],
};


module.exports = config;
