<script setup lang="ts">
import { useMovieListStore } from '@/stores/movieList.ts';
import MovieCard from '@/components/MovieCard.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

import LoadingCat from '@/components/LoadingCat.vue';

import type { MovieList } from '@/apiType';

const movieListStore = useMovieListStore();

const route = useRoute();
const movieList = ref<MovieList | null>(null);
const failed = ref(false);
const ok = ref(false);
movieListStore.search(
  route.params.search ? (route.params.search as string) : 'frozen',
  route.params.filter ? (route.params.filter as string) : '',
);

movieListStore.$subscribe((_, state) => {
  if (state.searchingData.Response === 'True') {
    movieList.value = state.searchingData;
    setTimeout(() => (ok.value = true));
  } else if (state.searchingData.Response === 'False') failed.value = true;
});
</script>

<template>
  <div
    class="movie-list flex min-w-full flex-wrap justify-center"
    v-if="movieList">
    <TransitionGroup name="list">
      <MovieCard
        v-show="ok"
        :imageUrl="movie.Poster"
        :id="movie.imdbID"
        v-for="movie in movieList.Search"
        :key="movie.imdbID" />
    </TransitionGroup>
  </div>
  <div v-else-if="failed">No results found</div>
  <div v-else>
    <LoadingCat />
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30rem);
}
</style>
