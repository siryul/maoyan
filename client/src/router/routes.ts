import type { RouteRecordRaw } from 'vue-router';

const router: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/movie/index.vue'),
  },
];

export default router;
