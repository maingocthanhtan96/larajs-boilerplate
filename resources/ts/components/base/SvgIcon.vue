<script setup lang="ts">
import { computed } from 'vue';
import type { CSSProperties } from 'vue';

interface Props {
  name: string;
  color?: string;
  fontSize?: number | string;
  width?: string;
  height?: string;
  class?: string;
}
defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps<Props>(), {
  color: '',
  fontSize: '',
  width: '1em',
  height: '1em',
  class: '',
});
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.name}) no-repeat 50% 50%`,
  };
});
const svgClass = computed(() => `${props.class} svg-icon`);
const hasExternal = computed(() => isExternal(props.name));
const svgStyle = computed<CSSProperties>(() => ({
  color: props.color ?? undefined,
  fontSize: props.fontSize ? `${props.fontSize}px` : undefined,
}));
</script>

<template>
  <div v-if="hasExternal" :style="{ ...styleExternalIcon, ...svgStyle }" :class="svgClass"></div>
  <i v-else :class="svgClass" :style="svgStyle">
    <svg fill="currentColor" aria-hidden="true" :width="width" :height="height">
      <use :href="`#icon-${name}`"></use>
    </svg>
  </i>
</template>

<style lang="scss" scoped>
.svg-icon {
  vertical-align: -0.125em;
  line-height: 0;
  display: inline-block;
}

.svg-external-icon {
  background-color: currentcolor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
