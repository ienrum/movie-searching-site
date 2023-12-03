<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="home-page flex min-h-screen flex-col items-center p-5">
    <SearchBar />
    <Suspense> <RouterView :key="$route.fullPath" /> </Suspense>
    <div
      v-if="$route.name === 'Home'"
      class="flex flex-grow flex-col items-center py-24">
      <h1 class="text-center text-4xl font-bold">
        Welcome to the <span class="text-cat-color">Cat</span> Movie!
      </h1>
    </div>
  </div>
</template>
