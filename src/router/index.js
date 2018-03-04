import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home/home.vue'
import movie_detail from '../view/movie_detail/movie_detail.vue'
import search_list from '../view/search_list/search_list.vue'
import movie_type from '../view/movie_type/movie_type.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/movie_detail/:id',
      name:'movie_detail',
      component: movie_detail
    },
    {
        path: '/movie_type/:type',
        name:'movie_type',
        component: movie_type
    },
    {
      path: '/search_list',
      name:'search_list',
      component: search_list
    }
  ],
  linkActiveClass:'active'
})
