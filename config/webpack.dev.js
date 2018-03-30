let base=require('./webpack.base')

let webpack=require('webpack')
//base.plugins.push(new UglifyPlugin())
let DefinePlugin=webpack.DefinePlugin;
base.plugins.push(new DefinePlugin({
    "process.env":'"development"'//加上单引号是为了让他们能正确解析 
}))
module.exports={
        ...base,
        devServer:{
            inline:true,
            open:true,
            port:3000,
            historyApiFallback:true, //使用h5historyApi时刷新时不会出现404
            noInfo:true//在运行时，没有过多的信息
        },
        devtool:'eval-source-map'//这是在报错时，会指向原代码
}