const path  =  require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
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
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}