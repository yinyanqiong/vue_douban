<template>
  <div class="movie_detail_wrap_theater">
    <div class="coming_top">
      影院热映
    </div>
    <ul class="movie_detail">

      <li class="movie_item" v-for="item in movie_theaters_all">
        <router-link class="link"  :to="'/movie_detail/'+item.id" >
          <img class="movie_img" width="100" height="142" :src="item.images.large" alt="">
          <p class="movie_name">{{item.title}}</p>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        movie_theaters_all:[]
      }
    },
    mounted() {
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then((response) => {
        this.movie_theaters_all=response.data.subjects;
      },(error) => {
        console.log(error);
      });
      /*this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon',{count:9}).then((response) => {
        this.movie_comings=response.data.subjects;
      },(error) => {
        console.log(error);
      }) ;*/
    },
    components: {}
  }
</script>
<style lang="stylus">
  .movie_detail_wrap_theater
    width:100%;
    padding-left:18px;
    .coming_top
      font-size:16px;
      padding:18px 0;
    .movie_detail
      overflow :hidden;
      display:flex;
      flex-wrap:wrap;
      .movie_item
        margin-right:15px;
        width:100px;
        font-size:0;
        .movie_name
          width:100px;
          height:20px;
          text-align:center;
          line-height:20px;
          font-size:14px;
</style>
