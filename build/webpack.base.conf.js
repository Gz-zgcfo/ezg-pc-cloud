const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                        loader: 'vue-loader',
                        options: {

                        }
                    },
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 与下面的scss重复使用，会报错，故注释
            // {
            //     test: /\.css$/,
            //     use: ['vue-style-loader', 'css-loader']
            // },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool,
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            title: "亿账柜信息管理平台",
            favicon: path.resolve(__dirname, '../src/images/td_icon.ico'),
            meta: {
                'renderer': 'webkit',
                'http-equiv': {
                    'http-equiv':"cache-control", 'content':"no-cache"
                },
                'copyright': '@亿账柜信息科技有限公司'
            }
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new AutoDllPlugin({
            inject: true, // will inject the DLL bundle to index.html
            debug: true,
            filename: '[name]_[hash].js',
            path: './dll',
            entry: {
                vue: ['vue', 'vue-router', 'vuex'],
                iview: ['iview/dist/iview.min','iview-area'],
                vchart: [
                    'v-charts/lib/line.common',
                    'v-charts/lib/bar.common',
                    'v-charts/lib/histogram.common',
                    'v-charts/lib/pie.common',
                    'v-charts/lib/funnel.common',
                ]
            }
        }),
        new webpack.optimize.SplitChunksPlugin(),
        new CopyWebpackPlugin(
            [
                {
                    from: 'src/styles/fonts',
                    to: 'fonts'
                },
                {
                    from: 'src/views/my-components/text-editor/tinymce',
                    to: 'js'
                },
                {
                    from:'WW_verify_z793ZwW9R5YytI0x.txt',
                    to: path.resolve(__dirname, '../dist/')
                }
            ], {
                ignore: [
                    'text-editor.vue'
                ]
            }
        ),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: ['Now Proxy in 220; You application is running here http://localhost:8089'],
            },
            clearConsole: true
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.json', '.vue'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
        }
    }
};