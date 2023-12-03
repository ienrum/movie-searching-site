import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './HomePage.vue';
import NotFound from './NotFound.vue';
import MovieDetail from '@/components/MovieDetail.vue';
import MovieList from '@/components/MovieList.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      children: [
        {
          path: 'search/:search',
          name: 'Search',
          meta: { title: 'MovieList' },
          component: MovieList,
        },
        {
          path: 'movie/:id',
          name: 'MovieDetail',
          meta: { title: 'MovieDetail' },
          component: MovieDetail,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
