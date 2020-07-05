<template>
  <div :class="['todo_item',todo.completed?'completed':'']">
       <input type="checkbox" name="" v-model="todo.completed" id="">
       <label for="">{{todo.content}}</label>
       <button @click="delItem">CLOSE</button>
  </div>
</template>
<script>
export default {
  name:'todoItem',
  props:{
    todo:{
      type:Object,
      default:()=>{
        return {};
      }
    }
  },
  methods:{
    delItem(){
      this.$emit('deleteItem',this.todo.id)
    },
  }
}
</script>
<style lang="less" scoped>
.todo_item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-top: 1px solid rgba(0, 0, 0,.1);
    input{
      height: 30px;
      width: 50px;
      outline: none;
      text-align: center;
    }
    &.completed{
      label{
        color: #999999;
        text-decoration: line-through;
      }
    }
    label{
      flex: 1;
      font-size: 24px;
      margin-left: 10px;
      transition: color .4s;
    }
    button{
      appearance: none;
      border: none;
      outline: none;
      background-color: transparent;
      color: #999999;
      cursor: pointer;

    }
}
</style>
