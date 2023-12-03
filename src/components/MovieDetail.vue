<script setup lang="ts">
import { useDetailedMovieStore } from '@/stores/detailedMovie';
import LoadingCat from '@/components/LoadingCat.vue';

import { ref } from 'vue';

import { useRoute } from 'vue-router';
import MovieDetailContent from '@/components/MovieDetailContent.vue';
import type { DetailMovie } from '@/apiType';
const route = useRoute();
const detailedMovieStore = useDetailedMovieStore();

if (route.params.id)
  detailedMovieStore.search(route.params.id as string, 'full');

const movie = ref<DetailMovie | null>(null);
const failed = ref(false);

detailedMovieStore.$subscribe((_, state) => {
  if (state.searchingData.Response === 'True')
    movie.value = state.searchingData;
  else if (state.searchingData.Response === 'False') failed.value = true;
});
</script>
<template>
  <Transition name="fade">
    <div
      class="movie-detail my-10 flex w-full min-w-min max-w-5xl flex-col items-center rounded-xl border-8 border-border-color bg-content-color p-12"
      v-if="movie">
      <div class="movie-meta-container flex flex-shrink-0 items-center">
        <img
          :src="movie.Poster.replace('SX300', 'SX500')"
          class="m-8 rounded-md border-8 border-border-color shadow-2xl" />
        <div class="flex flex-col">
          <div class="movie-meta-content p-5">
            <MovieDetailContent imageName="Title">{{
              movie.Title
            }}</MovieDetailContent>
            <MovieDetailContent imageName="History">{{
              movie.Year
            }}</MovieDetailContent>
            <MovieDetailContent imageName="Star">{{
              movie.Rated
            }}</MovieDetailContent>
            <MovieDetailContent imageName="Today">{{
              movie.Released
            }}</MovieDetailContent>
            <MovieDetailContent imageName="Timer">{{
              movie.Runtime
            }}</MovieDetailContent>
            <MovieDetailContent imageName="Movie">{{
              movie.Genre
            }}</MovieDetailContent>
            <MovieDetailContent imageName="Person">{{
              movie.Director
            }}</MovieDetailContent>
            <MovieDetailContent imageName="Edit">{{
              movie.Writer
            }}</MovieDetailContent>
            <MovieDetailContent imageName="Face">{{
              movie.Actors
            }}</MovieDetailContent>
          </div>
          <div class="movie-plot-container p-5">
            <p>{{ movie.Plot }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="failed">No results found</div>
    <div v-else><LoadingCat /></div>
  </Transition>
</template>

<style scoped>
@media (max-width: 1100px) {
  .movie-detail {
    padding: 1rem;
  }
  .movie-meta-container {
    flex-direction: column;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30rem);
}
</style>