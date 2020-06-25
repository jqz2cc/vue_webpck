const path  =  require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode:'development',
  // 打包入口
  entry:path.join(__dirname,'src/main.js'),
  //打包出口 
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname, 'dist')
  },
  // 配置打包规则
  module:{
    rules:[
      {
        test:/\.vue$/,  //以.vue 结尾的，使用vue-loader
        loader:'vue-loader'
      },
      {
        test:/\.(jeg|jpeg|png|svg)$/,
        loader:'url-loader',
        //   超出2048B的图片会使用file-loader 处理
        options:{
          name:'[name].[ext]',
          limit:2048,
        }
      },{
        test:/\.css$/,
        // css-loader  解决文件之间的依赖关系，把所有的css文件打包成一个文件
        // style-loader 将css-loader 打包完成后生成的文件挂载到页面的header标签中的style中
        use:['style-loader','css-loader'],  
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  resolve:{
    alias:{
      'vue':"vue/dist/vue.js"
    }
  }
}