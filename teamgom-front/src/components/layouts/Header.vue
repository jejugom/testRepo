<template>
  <header
    class="relative flex h-16 items-center justify-center bg-white shadow-xs"
  >
    <!-- 뒤로가기 -->
    <button
      v-if="showBackBtn"
      class="0 absolute left-5 text-2xl"
      @click="goBack"
      aria-label="뒤로가기"
    >
      ←
    </button>

    <!-- 로고 텍스트 -->
    <router-link :to="{ name: 'home' }" class="text-2xl font-bold">
      <span class="text-primary-300">노후</span>
      <span class="text-secondary-300">도락</span>
    </router-link>
  </header>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

const goBack = () => {
  router.back();
};

const showBackBtn = computed(() => {
  return !['home', 'not-found', 'fail', 'loading'].includes(
    route.name as string
  );
});
</script>
