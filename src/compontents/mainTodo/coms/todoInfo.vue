<template>
  <div class="todo_info">
    <span class="title"> {{total}} items left</span>
    <div class="tabs">
      <div href=""
           v-for="(item,index) in status "
           :class="{'active':currentStatus == item}"
           :key="index"
           @click="changeStatus(item)">{{item}}</div>
    </div>
    <button class="clear" @click="clear">Clear Completed</button>
  </div>
</template>
<script>
  export default {
    name: "todoInfo",
    props: {
      total: Number,

    },
    data() {
      return {
        status: ['all', 'active', 'completed'],
        currentStatus: 'all',
      }
    },
    methods: {
      changeStatus(status) {
        this.currentStatus = status;
        this.$emit('toggleState', status)
      },
      clear(){
        this.$emit('clear')
      },
    }

  }
</script>
<style lang="less" scoped>
  .todo_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .title {
      color: rgb(221, 144, 43);
    }
    .tabs {
      div {
        margin: 0 10px;
        padding: 3px 5px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        width: 77px;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          color: aquamarine;
        }
        &.active {
          background-color: antiquewhite;
          color: #333333;
        }
      }
    }
    .clear {
      outline: none;
      border: none;
      appearance: none;
      background-color: #ffffff;
    }
  }
</style>
