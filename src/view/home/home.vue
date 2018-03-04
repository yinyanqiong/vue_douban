<template>
  <div class="movie_wrap">
    <div>
      <div class="movie_top_wrap">
        <div class="movie_top">
          <span class="movie_title">正在热映电影</span>
          <router-link class="link more" :to="'/movie_type/'+type[0]" >更多</router-link>
        </div>
      </div>
      <div class="movie_detail_wrap">
        <ul class="movie_detail">
          <li class="movie_item" v-for="item in theaters">
            <router-link class="link"  :to="'/movie_detail/'+item.id" >
              <img class="movie_img" width="100" height="142" :src="item.images.large" alt="" >
              <p class="movie_name">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="movie_top_wrap" id="movie_top_wrap_coming">
        <div class="movie_top">
          <span class="movie_title">即将上映电影</span>
          <router-link class="link more" :to="'/movie_type/'+type[1]" >更多</router-link>
        </div>
      </div>
      <div class="movie_detail_wrap">
        <ul class="movie_detail">
          <li class="movie_item" v-for="item in coming">
            <router-link class="link"  :to="'/movie_detail/'+item.id" >
              <img class="movie_img" width="100" height="142" :src="item.images.large" alt="">
              <p class="movie_name">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
   <!-- <div>
      <div class="movie_top_wrap" id="movie_top_wrap_us_box">
        <div class="movie_top">
          <span class="movie_title">北美票房榜</span>
          <router-link class="link more" :to="'/movie_type/'+type[2]" >更多</router-link>
        </div>
      </div>
      <div class="movie_detail_wrap">
        <ul class="movie_detail">
          <li class="movie_item" v-for="item in us_box">
            <router-link class="link"  :to="'/movie_detail/'+item.id" >
              <img class="movie_img" width="100" height="142" :src="item.images.large" alt="">
              <p class="movie_name">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>-->
  </div>
</template>
<script>
  import VueScrollBar from 'smooth-scrollbar'
    export default {
      data() {
        return {
          theaters:[],
          coming:[],
          us_box:[],
          type:['in_theaters','coming_soon','us_box']
        }
      },
      mounted() {
        VueScrollBar.init(document.querySelector('.movie_detail_wrap'));
        VueScrollBar.init(document.querySelector('#movie_top_wrap_coming'));
        const d={
          count:3
        };
         this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters',{params:d}).then((response) => {
           this.theaters=response.data.subjects;
         },(error) => {
           console.log(error);
         });
        this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon',{params:d}).then((response) => {
          this.coming=response.data.subjects;
        },(error) => {
          console.log(error);
        }) ;
        /*this.$http.jsonp('https://api.douban.com/v2/movie/us_box',{params:d}).then((response) => {
            this.us_box=response.data.subjects;
        },(error) => {
            console.log(error);
        }) ;*/
      }
    }
</script>
<style lang="stylus">
  .movie_wrap
    width:100%;
    .movie_top_wrap
      width:100%;
      height:36px;
      .movie_top
        position:relative;
        line-height:36px;
        font-size:14px;
        .movie_title
          position:absolute;
          left:18px;
          top:center;
          color:black;
        .more
          position:absolute;
          right:20px;
          top:center;
          color:#42bd56;
    .movie_detail_wrap
      width:350px;
      padding-left:18px;
      /*border:1px solid red;*/
      overflow:auto;
      .movie_detail
        display:flex;
        .movie_item
          margin-right:15px;
          width:100px;
          font-size:0;
          .link
            color:black;
            .movie_name
              width:100px;
              height:20px;
              overflow: hidden;
              text-align:center;
              line-height:20px;
              font-size:12px;
</style>
