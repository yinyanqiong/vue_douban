<template>
  <div>
    <div class="one_movie_top">
      <div class="one_movie_img">
        <img :src="image" alt="" width="100" height="140">
      </div>
      <div class="one_movie_des">
        <h2 class="one_movie_title">
          {{one_movie.title}}
        </h2>
        <div class="one_movie_ratings">
          <star :size="36" :score="this.score" class="one_movie_star" v-if="this.score"></star><span class="movie_score" v-if="this.score" >{{score}}</span><span class="count_ratings" v-if="this.one_movie.collect_count">{{one_movie.collect_count}}人评价</span>
        </div>
        <div class="one_movie_content" >
          138分钟 / <span v-for="genre in genres">{{genre}} / </span> <span v-for="director in directors">{{director.name}}(导演) / </span><span v-for="cast in casts">{{cast.name}} / </span> {{one_movie.year}} 年 (<span v-for="country in countries">{{country}} </span>) 上映
        </div>
      </div>
    </div>
    <div class="one_movie_btn">
      <div class="btn_top">
        <span class="btn_like">想看</span><span class="btn_done">看过</span>
      </div>
      <p class="btn_bottom">在App上保留你的观影足迹</p>
    </div>
    <div class="one_movie_summary">
      <h3 class="sub_title">{{one_movie.title}}剧情简介</h3>
      <p class="summary" :class="{summary_show:!show_hid}">{{one_movie.summary}}</p>
      <span class="show_hide" @click="show_hide" v-if="show_hid">(展开)</span>
    </div>
    <div class="one_movie_casts">
      <h3 class="sub_title">影人</h3>
      <div class="all_casts_wrap">
        <ul class="all_casts">
          <li class="casts_item" v-for="director in directors">
            <!--<img :src="director.avatars.large" class="casts_item_img" width="75" height="107">-->
            <p class="casts_item_name">{{director.name}}</p>
          </li>
          <li class="casts_item" v-for="cast in casts">
            <!--<img :src="cast.avatars.small" alt=""  class="casts_item_img" width="75" height="107">-->
            <p class="casts_item_name">{{cast.name}}</p>
          </li>
        </ul>
        <ul class="all_casts_job">
          <li class="casts_job_item" v-for="director in directors">导演</li>
          <li class="casts_job_item" v-for="cast in casts">演员</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import star from '../../components/star/star.vue'
  export default {
    data() {
      return {
        show_hid:true,
        one_movie:{},
        image:"",
        score:0,
        genres:[],
        directors:[],
        casts:[],
        countries:[]
      }
    },
    mounted(){
      this.$http.jsonp(this.url).then((response) => {
        this.one_movie=response.data;
        this.image=response.data.images.small;
        this.score=response.data.rating.average;
        this.genres=response.data.genres;
        this.directors=response.data.directors;
        this.casts=response.data.casts;
        this.countries=response.data.countries;
      },(error) => {
        console.log(error);
      });
    },
    computed:{
      id:function(){
        return this.$route.params.id;
      },
      url:function(){
        return 'https://api.douban.com/v2/movie/subject/'+this.id
      }
    },
    components: {
      star
    },
    methods:{
        show_hide:function(){
            this.show_hid=!this.show_hid;
        }
    }
  }
</script>
<style lang="stylus">
  .one_movie_top
    padding:18px 0 18px 18px;
    display:flex;
    .one_movie_img
      flex:0 0 100px;
      display:inline-block;
      width:100px;
      height:140px;
    .one_movie_des
      flex:1;
      padding-left:18px;
      padding-right:10px;
      .one_movie_title
        font-size:16px;
        font-weight:300;
        line-height:16px;
        padding-bottom:10px;
      .one_movie_ratings
        height:18px;
        line-height:18px;
        font-size:14px;
        color:#494949;
        .movie_score
          display:inline-block;
          padding-right:6px;
          padding-left:4px;
        .count_ratings
          display:inline-block;
        .one_movie_star
          vertical-align:top;
          display:inline-block;
      .one_movie_content
        padding-top:10px;
        color:#494949;
        line-height:18px;
        font-size:14px;
  .one_movie_btn
    padding:0 18px 14px 18px;
    font-size:14px;
    line-height:24px;
    text-align:center ;
    .btn_top
      display:flex;
      color:#ffb712;
      height:24px;
      .btn_like
        display:inline-block;
        flex:1;
        border:1px solid  #ffb712;
        margin-right:12px;
      .btn_done
        display:inline-block;
        flex:1;
        border:1px solid  #ffb712;
    .btn_bottom
      margin-top:10px;
      color:#42bd56;
      border:1px solid #42bd56;

  .one_movie_summary
    padding:0 18px 14px 18px;
    font-size:15px;
    position:relative;
    .sub_title
      color:#aaa;
      height:24px;
      line-height:24px;
      padding-bottom:10px;
    .summary
      padding-right:30px;
      font-size:14px;
      color:#494949;
      line-height:18px;
      /*height:54px;*/
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:3;    //显示的行数
      overflow:hidden;
      text-overflow:ellipsis;
    .summary_show
      -webkit-line-clamp:99;    //显示的行数
    .show_hide
      color:#42bd56
      font-size:14px;
      position:absolute;
      bottom:17px;
      right:18px;
  .one_movie_casts
    padding:0 18px 14px 18px;
    font-size:15px;
    .sub_title
      color:#aaa;
      height:24px;
      line-height:24px;
      padding-bottom:10px;
    .all_casts_wrap
      .all_casts
        display:flex;
        .casts_item
          padding-right:6px;
          width:75px;
          text-align:center;
          .casts_item_name
            padding-top:6px;
            font-size:14px;
            color:#494949;
            line-height:18px;
        .casts_item:last-child
          padding-right:0;
      .all_casts_job
        display:flex;
        padding-top:6px;
        font-size:14px;
        line-height:18px;
        .casts_job_item
          width:75px;
          height:100px;
          pading-right:6px;
          text-align:center;
          color:#aaa;
        .casts_item:last-child
          padding-right:0;

</style>
