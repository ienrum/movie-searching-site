<script setup lang="ts">
import { defineProps } from 'vue';
import router from '@/routes';

const props = defineProps<{ imageUrl: string; id: string }>();

async function getMovieDetails() {
  router.push(`/movie/${props.id}`);
}
</script>

<template>
  <img
    class="movie-card border-border-color m-8 rounded-md border-8 shadow-2xl"
    :src="imageUrl"
    @click="getMovieDetails()" />
</template>
