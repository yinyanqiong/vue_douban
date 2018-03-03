<template>
  <div id="app">
    <v_header class="v_header_wrap"></v_header>
    <div class="div1">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import v_header from './components/v-header/v-header.vue'
export default {
  name: 'App',
  components:{
    v_header
  }
}
</script>

<style lang="stylus">
  .link
    color:black;
    text-decoration: none;
  .active
    color:red;
    text-decoration: none;
  .div1
    overflow :hidden;
    margin-top:36px;
</style>
