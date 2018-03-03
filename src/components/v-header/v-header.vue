<template>
  <div class="header">
    <router-link class="header_content "  to="/home">豆瓣电影</router-link>
    <search class="search"></search>
  </div>
</template>
<script>
  import search from '../search/search.vue'
  export default {
    components:{
      search
    }
  }
</script>
<style lang="stylus">
  .header
    display:flex;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:36px;
    font-size:16px;
    background:white;
    border-bottom:1px solid rgba(0,0,0,0.1);
    .header_content
      flex:0 0 150px;
      padding-left:18px;
      display:inline-block;
      width:150px;
      line-height:36px;
      color:rgb(35, 132, 232);

</style>
