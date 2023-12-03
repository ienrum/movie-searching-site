<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="home-page flex min-h-screen flex-col items-center p-5">
    <SearchBar />
    <Suspense> <RouterView :key="$route.fullPath" /> </Suspense>
  </div>
</template>
