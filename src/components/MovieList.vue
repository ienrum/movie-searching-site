<script setup lang="ts">
import { useMovieListStore } from '@/stores/movieList.ts';
import MovieCard from '@/components/MovieCard.vue';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';

import LoadingCat from '@/components/LoadingCat.vue';

import type { MovieList, Search } from '@/apiType';

const movieListStore = useMovieListStore();

const filterValue = ref('title');

const route = useRoute();
const movieList = computed<MovieList>({
  get: () => movieListStore.searchingData,
  set: (val) => (movieListStore.searchingData = val),
});

if (route.params.search !== movieListStore.searchKeyword) {
  movieListStore.search(route.params.search as string);
}
watch(
  () => route.params.search,
  async (val) => {
    if (val && val !== movieListStore.searchKeyword) {
      movieListStore.search(val as string);
      movieListStore.$reset();
    }
  },
);

watch(
  () => filterValue.value,
  (val) => {
    if (val === 'title' && movieList.value.Response && movieList.value.Search)
      movieList.value.Search = movieList.value.Search.sort(
        (a: Search, b: Search) => a.Title.localeCompare(b.Title) as number,
      );
    else if (
      val === 'year' &&
      movieList.value.Response &&
      movieList.value.Search
    )
      movieList.value.Search = movieList.value.Search.sort(
        (a: Search, b: Search) => a.Year.localeCompare(b.Year) as number,
      );
  },
);
</script>

<template>
  <select
    name="filter"
    id="filter"
    class="rounded-md border-4 border-border-color p-2"
    @click="(e) => (filterValue = (e.target as HTMLSelectElement).value)">
    <option value="title">Title</option>
    <option value="year">Year</option>
  </select>
  <div
    class="movie-list flex min-w-full flex-wrap justify-center"
    v-if="movieList && movieList.Response === 'True'">
    <TransitionGroup name="list">
      <MovieCard
        :imageUrl="movie.Poster"
        :id="movie.imdbID"
        :title="movie.Title"
        v-for="movie in movieList.Search"
        :key="movie.imdbID" />
    </TransitionGroup>
  </div>
  <div v-else-if="movieList && movieList.Response === 'False'">
    No results found
  </div>
  <div v-else>
    <LoadingCat />
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30rem);
}
/* 이동 애니메이션을 올바르게 계산할 수 있도록
   레이아웃 흐름에서 나머지 항목을 꺼내기. */
.list-leave-active {
  position: absolute;
}
</style>
