let base =require('./webpack.base')
let webpack=require('webpack')
//base.plugins.push(new UglifyPlugin())
let DefinePlugin=webpack.DefinePlugin;//打包上线时，根据环境进行改变域名
base.plugins.push(new DefinePlugin({
    "process.env":'"production"'
}))
module.exports={
    ...base
}