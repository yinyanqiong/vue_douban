import Vue from 'vue'
import Router from 'vue-router'
import in_theaters from '../view/in_theaters/in_theaters.vue'
import coming_soon from '../view/coming_soon/coming_soon.vue'
import home from '../view/home/home.vue'
import movie_detail from '../view/movie_detail/movie_detail.vue'
import search_list from '../view/search_list/search_list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/in_theaters',
      name: 'in_theaters',
      component: in_theaters
    },
    {
      path: '/coming_soon',
      name: 'coming_soon',
      component: coming_soon
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
      path: '/search_list',
      name:'search_list',
      component: search_list
    }
  ],
  linkActiveClass:'active'
})
