<template>
  <div>
    <div class="search_type" v-if="!this.q"> 请输入查询内容 </div>
    <div v-if="this.q" class="search_type">电影</div>
    <div class="search_list_wrap">
      <ul class="search_list">
        <li v-if="lists" v-for="list in lists" class="search_list_item" >
            <router-link class="link"  :to="'/movie_detail/'+list.id" ><img class="search_img" :src="list.images.small" alt="" width="100" height="140"></router-link>
            <div class="search_des">
              <h2 class="search_des_title">
                {{list.title}}
              </h2>
              <div class="search_derectors">
                导演：<span v-for="derector in list.directors" class="search_derector">{{derector.name}} </span>
              </div>
              <p class="list_year">上映时间：{{list.year}}</p>
              <p>看过人数：{{list.collect_count}}</p>
              <div class="search_rating" v-if="list.rating.average">
                评分：<star :size="36" :score="list.rating.average" class="search_star" ></star><span class="search_score" >{{list.rating.average}}</span>
              </div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import star from '../../components/star/star.vue'
  export default {
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
        }
    },
    components:{
        star
    }
  }
</script>
<style lang="stylus">
  .search_type
    color:#aaa;
    font-size:14px;
    padding:18px 18px 10px 18px;
  .search_list_wrap
    padding-left:18px;
    .search_list
      .search_list_item
        padding-bottom:8px;
        display:flex;
        .search_img
          flex:0 0 100;
          width:100px;
        .search_des
          flex:1
          padding-left:10px;
          padding-top:4px;
          font-size:14px;
          .search_derectors
            padding:12px 0;
          .list_year
            padding-bottom:12px;
          .search_rating
            display:flex;
            padding-top:12px;
            line-height:18px;
            .search_star

              padding-right:10px;

</style>
