import NProgress from 'nprogress'; // progress bar
import router from '@/router';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  // start progress bar
  NProgress.start();
  document.title = to.meta.title || env('VITE_APP_NAME');

  return next();
});

router.afterEach(() => {
  return NProgress.done();
});
