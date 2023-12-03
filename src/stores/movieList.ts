import { defineStore } from 'pinia';
import { ref } from 'vue';

import axios from 'axios';

import type { MovieList } from '../apiType.d.ts';

const internalApi = '/api/movieApi';

export const useMovieListStore = defineStore('moveiList', () => {
  const searchingData = ref<MovieList>({} as MovieList);

  async function search(s: string, y?: string, page?: string) {
    const { data: responseValue } = await axios({
      url: internalApi,
      method: 'POST',
      data: {
        ref: 'search',
        s,
        y,
        page,
      },
    });
    searchingData.value = responseValue;
  }
  return {
    searchingData,
    search,
  };
});
