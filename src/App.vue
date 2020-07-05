<template>
  <div id="app">
      
      <input type="text" v-model="value"> <input type="button" @click="add" value="button">
      <ul>
        <li v-for="(item,index) in  list" :key="index">{{item}}</li>
      </ul>
       <div>  this is app .nihao de hahah</div>
  </div>


</template>
<script>
import img from './../src/assets/images/login.png'

import './assets/style/style.css'

export default {
  name:'App',
  data(){
    return{
      value:'',
      list:[
        '111111111111',
        '111111111111',
        '111111111111',
        '111111111111',
        '111111111111',
      ]
    }
  },
  methods:{
    add(){
      if(this.value === '') return;
       this.list.push(this.value);
       this.value = ''
    },
  },
  created(){
    console.log(img)
  },
}
</script>
<style scoped>
div{
  transform: translate(100px,100px);
  color: beige;
}

#app li:only-of-type(odd){
  color:red;
}
</style>

