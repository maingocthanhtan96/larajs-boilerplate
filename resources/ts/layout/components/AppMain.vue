<template>
  <section class="app-main">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="transitionName" mode="out-in">
        <KeepAlive :include="cachedViews">
          <component :is="Component" :key="route.path"></component>
        </KeepAlive>
      </Transition>
    </RouterView>
  </section>
</template>

<script>
import { routes } from '@/router';

export default {
  name: 'AppMain',
  setup() {
    const route = useRoute();
    const routerTransition = {
      to: 'fade-transform-right',
      from: 'fade-transform-left',
    };
    const { routerTransitionTo, routerTransitionFrom } = routerTransition;
    const transitionName = ref(routerTransitionTo);
    const routeChild = (routes, viewCache) => {
      for (const route of routes) {
        if (!route?.meta?.noCache) {
          if (route.children) {
            routeChild(route.children, viewCache);
          } else if (name && !viewCache.includes(name)) {
            viewCache.push(name);
          }
        }
      }
      return viewCache;
    };
    onMounted(() => {
      if (routerTransitionFrom) {
        watch(route, (to, from) => {
          const toDepth = to.path.split('/').length;
          const fromDepth = from.path.split('/').length;
          transitionName.value = toDepth < fromDepth ? routerTransitionTo : routerTransitionFrom;
        });
      }
    });

    return {
      transitionName,
      cachedViews: computed(() => {
        const viewCache = [];
        routeChild(routes, viewCache);
        return viewCache;
      }),
    };
  },
};
</script>
