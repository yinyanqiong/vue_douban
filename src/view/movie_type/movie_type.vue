<template>
    <div class="movie_detail_wrap_coming " ref="coming">
        <div class="coming_top">
            {{title}}
        </div>
        <ul class="movie_detail">
            <li class="movie_item" v-for="item in movies">
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
                movies:[],
                title:""
            }
        },
        mounted() {
            /*this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then((response) => {
             this.movie_theaters_all=response.data.subjects;
             },(error) => {
             console.log(error);
             });*/
            this.$http.jsonp(this.url).then((response) => {
                this.movies=response.data.subjects;
                this.title=response.data.title;
            },(error) => {
                console.log(error);
            }) ;
        },
        components: {},
        computed:{
            type:function(){
                return this.$route.params.type;
            },
            url:function(){
                return 'https://api.douban.com/v2/movie/'+this.type
            }
        }
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
