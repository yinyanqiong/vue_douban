<template>
  <div class="search_wrap">
    <input type="text" class="search_text" v-model="text">
    <router-link class="link"   :to="{path:'/search_list',query: {q: q}}">
      <i class="iconfont icon-fangdajing" @click="emitQ"></i>
    </router-link>
  </div>
</template>
<script>
  export default {
    data:function(){
        return {
            text:"",
            q:"none"
        }
    },
    methods:{
        emitQ:function(){
            this.q=this.text;
            console.log(this.q);
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
