console.log(process.env.NODE_NEV)
 let webpack=require('webpack')
let dir=process.cwd()//获取当前程序运行的目录 
let baseConfig={
     entry:{//入口文件
        bundle:dir+'/src/main'//绝对路径
    },
    output:{
        filename:'[name].js',
        path:dir+'/dist'
    },
    module:{
            rules:[
            {
                test:/\.(jsx|js)$/,
                use:["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:['url-loader']
            },{
                test:/.(eot|svg|ttf|woff)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[],
    resolve:{
        extensions:['.js','.jsx']
    }
}
module.exports=baseConfig
// let config={}
// if(process.env.NODE_NEV=='development'){
//    config={
//        ...baseConfig,
//         devServer:{
//             inline:true,
//             open:true,
//             port:3000,
//             historyApiFallback:true //使用h5historyApi时刷新时不会出现404
//         },
//         devtool:'eval-source-map'//这是在报错时，会指向原代码
//    }
// }
// if(process.env.NODE_NEV=='production'){
//     //baseConfig.plugins.push(new UglifyPlugin())
//     config={//往plugins中进行追加插件
//         ...baseConfig,

//     }
// }
// module.exports=config