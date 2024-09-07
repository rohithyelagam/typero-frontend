const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: "./index.js", 
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "9500",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  'babel-loader'
            },
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./public/index.html')
        })
    ]
}