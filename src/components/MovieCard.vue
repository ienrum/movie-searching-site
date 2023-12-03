<script setup lang="ts">
import { defineProps } from 'vue';
import router from '@/routes';

const props = defineProps<{
  imageUrl: string;
  id: string;
  title: string;
}>();

async function getMovieDetails() {
  router.push(`/movie/${props.id}`);
}
</script>

<template>
  <div class="movie-card-container relative flex flex-col items-center">
    <img
      class="movie-card relative z-10 m-8 cursor-pointer rounded-md border-8 border-border-color shadow-2xl duration-500 hover:translate-y-10"
      :src="imageUrl.replace('SX300', 'SX200')"
      @click="getMovieDetails()" />
    <div class="movie-card-title-container absolute h-full w-full p-8">
      <h1 class="movie-card-title h-1/6 text-ellipsis break-words text-center">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
