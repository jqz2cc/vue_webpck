<template>
  <div id="app">
   <main-header></main-header>
   <main-todo />
  </div>
</template>
<script>
import img from './../src/assets/images/login.png'

import './assets/style/global.less'

import mainHeader from "./compontents/mainHeader.vue"
import mainTodo from './compontents/mainTodo/mainTodo.vue'

export default {
  name:'App',
  components:{
    mainHeader,
    mainTodo
  },
  data(){
    return{
    }
  },
  methods:{

  },
  created(){
  },
}
</script>
<style scoped>

</style>

