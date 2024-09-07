import NProgress from 'nprogress'; // progress bar
import router from '@/router';

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  document.title = to.meta.title || env('VITE_APP_NAME');

  return next();
});

router.afterEach(() => {
  return NProgress.done();
});
