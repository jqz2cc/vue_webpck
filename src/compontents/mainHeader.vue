<template>
  <header class="main_header">
    <h1>ToDoList</h1>
  </header>
</template>
<script>
export default {
  name:'mainHeader'
}
</script>
<style lang="less" scoped>
@import  '~style/global.less';
.main_header{
  text-align: center;
  h1{
    font-size: 100px;
    font-weight: 100;
    color: antiquewhite;
    margin-bottom: 20px;
    text-shadow: 2px 3px 5px #b18d8d;
  }
}
</style>

