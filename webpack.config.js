const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
            ,
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: 'src',
        open:
            true,
        port:
            9000,
        hot:
            true,
        proxy: {
            "/login": {
                target: "http://127.0.0.1:5000",
                pathRewrite: {"^/login": ""}
            },
            onProxyRes: function (proxyRes, req, res) {
                var cookies = proxyRes.headers['set-cookie'];
                var cookieRegex = /Path=\/XXX\//i;
                //修改cookie Path
                if (cookies) {
                    var newCookie = cookies.map(function (cookie) {
                        if (cookieRegex.test(cookie)) {
                            return cookie.replace(cookieRegex, 'Path=/');
                        }
                        return cookie;
                    });
                    //修改cookie path
                    delete proxyRes.headers['set-cookie'];
                    proxyRes.headers['set-cookie'] = newCookie;
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
};