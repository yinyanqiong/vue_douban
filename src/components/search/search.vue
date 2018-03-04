<template>
  <div class="search_wrap">
    <input type="text" class="search_text" v-model="q">
    <router-link class="link"   :to="{path:'/search_list',query: {q: q}}" @click.native="flushCom">
      <i class="iconfont icon-fangdajing"></i>
    </router-link>
  </div>
</template>
<script>
  export default {
    data:function(){
        return {
            q:""
        }
    },
    methods:{
        flushCom:function(){
            this.$router.go(0);
        }
    }
  }
</script>
<style lang="stylus">
  .search_wrap
    width:180px;
    heigth:36px;
    position:relative
    .search_text
      position:absolute;
      top:3px;
      left:0;
      width:142px;
      height:30px;
      padding-left:8px;
      border:1px solid rgba(0,0,0,0.2);
    .icon-fangdajing
      position:absolute;
      top:40%;
      right:0;
</style>
