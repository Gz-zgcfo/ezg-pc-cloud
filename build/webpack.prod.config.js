const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const os = require('os');
const fs = require('fs');
const path = require('path');
const package = require('../package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


fs.open('./build/env.js', 'w', function(err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: '@/main',
    },
    output: {
        // publicPath: 'http://cloud.zgcfo.com/dist/',  // 修改 https://iv...admin 这部分为你的服务器域名
        // publicPath: 'http://192.168.0.220:8089/dist/',
        publicPath:'/static/', //可以配置成这样，相对路径，由服务器处理
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].chunk.js'
    },
    //  开启远程调试时使用,默认注释 
    // devtool: '#source-map',
    // productionSourceMap: true,
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dll/vue-manifest.json')
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dll/iview-manifest.json')
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dll/vchart-manifest.json')
        }),
        new cleanWebpackPlugin(['dist/*'], {
            root: path.resolve(__dirname, '../')
        }),
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: true
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     // name: 'vendors',
        //     // filename: 'vendors.[hash].js'
        //     name: ['vender-base','vender-exten2','vender-vchart'],
        //     // name: ['vender-exten', 'vender-base','vender-exten2','vender-vchart'],
        //     minChunks: Infinity
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        // new UglifyJsParallelPlugin({
        //     workers: os.cpus().length,
        //     mangle: true,
        //     compressor: {
        //         warnings: false,
        //         drop_console: true,
        //         drop_debugger: true
        //     }
        // }),
        //  查看打包大小,图片展示，在生产环境下配置
        new BundleAnalyzerPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'td_icon.ico'
            },
            //  字体文件
            {
                from: 'src/styles/fonts',
                to: 'fonts'
            },
            //  主题文件
            // {
            //     from: 'src/views/main-components/theme-switch/theme'
            // },
            //  富文本编辑器
            /** 
             *  ！！！由于tinymce的配置问题，tinymce中数个文件夹需要与tinymce同级，否则会读取不到，需要修改npm包
            */
            {
                from: 'src/views/my-components/text-editor/tinymce',
                to: 'js'
            },
            //  npm缓存包
            {
                from: 'dll/static/',
                to: "../dll"
            },
            //  微信凭证
            {
                from:'WW_verify_z793ZwW9R5YytI0x.txt',
                to: "../"
            }
        ], {
            ignore: [
                'text-editor.vue'
            ]
        }),
        new HtmlWebpackPlugin({
            title: '亿账柜信息管理平台',
            favicon: './td_icon.ico',
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: false
        }),
    ]
});