<template>
  <div class="bg-surface-100 flex min-h-screen flex-col items-center">
    <!-- 상단 고정 헤더 -->
    <Header class="sticky top-0 z-50 w-full max-w-[600px]" />

    <!-- 본문 영역 -->
    <main class="w-full max-w-[600px] flex-1 bg-white px-5 py-10">
      <slot />
    </main>

    <!-- 하단 고정 탭바 -->
    <TabBar class="sticky bottom-0 z-50 w-full max-w-[600px]" />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import TabBar from './TabBar.vue';
</script>
