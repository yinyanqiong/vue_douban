<template>
  <div class="movie_detail_wrap_coming " ref="coming">
    <div class="coming_top">
      即将上映
    </div>
    <ul class="movie_detail">
      <li class="movie_item" v-for="item in movie_coming_all">
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
        movie_coming_all:[]
      }
    },
    mounted() {
      /*this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then((response) => {
        this.movie_theaters_all=response.data.subjects;
      },(error) => {
        console.log(error);
      });*/
      this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon').then((response) => {
        this.movie_coming_all=response.data.subjects;
      },(error) => {
        console.log(error);
      }) ;
    },
    components: {}
  }
</script>
<style lang="stylus">
  .movie_detail_wrap_coming
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
          font-size:12px;
</style>
