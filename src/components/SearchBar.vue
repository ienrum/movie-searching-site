<script setup lang="ts">
import IconImage from './IconImage.vue';
import { ref } from 'vue';
import router from '@/routes';

const search = ref('');
const filterValue = ref(' ');

async function searchMovies() {
  router.push({
    name: 'Search',
    params: { search: search.value },
  });
}
</script>

<template>
  <form
    @submit.prevent="searchMovies"
    class="flex w-full flex-wrap justify-center p-4">
    <input
      class="m-3 max-w-md flex-grow rounded-md border-4 border-border-color p-2"
      type="text"
      placeholder="Search"
      @keydown="(e) => (search = (e.target as HTMLInputElement).value)" />
    <button class="px-1" type="submit"><IconImage>Search</IconImage></button>
    <select
      name="filter"
      id="filter"
      class="m-3 rounded-md border-4 border-border-color p-2"
      @click="(e) => (filterValue = (e.target as HTMLSelectElement).value)">
      <option value="all">All</option>
      <option value="javascript">JavaScript</option>
      <option value="css">CSS</option>
      <option value="html">HTML</option>
    </select>
  </form>
</template>

<style scoped></style>
