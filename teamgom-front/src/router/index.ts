import { createRouter, createWebHistory } from 'vue-router';

// 기본페이지
import HomePage from '@/pages/HomePage.vue';
// 예외페이지
import FailPage from '@/pages/etc/FailPage.vue';
import LoadingPage from '@/pages/etc/LoadingPage.vue';
import NotFoundPage from '@/pages/etc/404Page.vue';
// 라우트 모듈
import authRoutes from './auth';
import eventRoutes from './event';
import jeungyeoRoutes from './jeungyeo';
import nohooRoutes from './nohoo';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },

    {
      path: '/fail',
      name: 'fail',
      component: FailPage,
    },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingPage,
    },
    ...authRoutes,
    ...eventRoutes,
    ...jeungyeoRoutes,
    ...nohooRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
});

export default router;
