<template>
  <div>
    <div>{{title}}</div>
    <div>
      <ul>
        <li v-if="lists" v-for="list in lists">
          {{list.title}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    export default {
      methods:{
         l:function(){
             alert(l);
         }
      },
      data() {
          return {
              lists:[],
              title:""
          }
      },
      mounted() {
          this.$http.jsonp(this.url).then((response) => {
              this.lists=response.data.subjects;
              this.title=response.data.title;
          },(error) => {
              console.log(error);
          }) ;
      },
      computed:{
          q:function(){
              return this.$route.query.q;
          },
          url:function(){
              return 'https://api.douban.com/v2/movie/search?q='+this.q;
//                return 'https://api.douban.com/v2/movie/search'
          }
      }
    }
</script>
<style>

</style>
