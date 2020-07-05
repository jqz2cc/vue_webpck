// 导入vue事例
// 挂载APP组件
import Vue from 'vue'
// 导入组件
import App from './App.vue'


// 创建APP实例
new Vue({
  el:'#app',
  components:{
    App,
  },
  template:'<App/>'
})

// consolel.log('test')
// const arr= [1,2,3].map(item=>item+1)
// console.error(arr);
