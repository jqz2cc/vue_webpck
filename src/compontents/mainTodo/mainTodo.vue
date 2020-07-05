<template>
  <div class="main_todo">
    <input type="text" name="" v-model="value" placeholder="what to do ?" @keyup.enter="addTodo" class="add_todo" id="">
    <todo-item v-for="(item,index) in filterData" :todo="item" :key="index" @deleteItem='handleDeteleItem' />
    <todo-info :total="total" @toggleState="handleToggleState" @clear="handleClear" />
  </div>
</template>
<script>
import todoItem from './coms/todoItem.vue'
import todoInfo from './coms/todoInfo.vue'
let id = 15;
export default {
  name:'mainTodo',
  components:{
    todoItem,
    todoInfo
  },
  data(){
    return{
      value:'',
      total:0,
      filter:'all',
      todoData:[]
    }
  },
  watch:{
    todoData:{
      deep:true,
      handler(){
       this.total =  this.todoData.filter(item=>item.completed == false).length
      },
    }
  },
  computed:{
      filterData(){
            switch(this.filter){
              case 'all':
                return this.todoData
                break;
              case 'active':
                return this.todoData.filter(item=>item.completed == false);
                break;
              case 'completed':
                return this.todoData.filter(item=>item.completed == true);
            }
      },
  },
  methods:{
    addTodo(){
       if(this.value === '') return;
       let obj = {
         id:id++,
         content:this.value,
         completed:false,
         filter:'all',
       }
       this.todoData.unshift(obj);
       this.value = '';
    },
    handleDeteleItem(id){
        this.todoData.splice(this.todoData.findIndex(item => item.id == id),1)
    },
    handleToggleState(state){
       this.filter = state;
    },
    handleClear(){
      this.todoData= this.todoData.filter(item=>item.completed === false)
    },
  }
}
</script>
<style lang="less" scoped>
.main_todo{
    width: 600px;
    margin:  0 auto;
    background-color: #ffffff;
    box-shadow: 0 0 17px #666666;
    .add_todo{
      font-size: 24px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: inherit;
      color: inherit;
      border: none;
      outline: none;
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
    }
}
</style>
