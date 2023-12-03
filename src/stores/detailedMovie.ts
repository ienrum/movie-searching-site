import { defineStore } from 'pinia';
import { ref } from 'vue';

import axios from 'axios';

import type { DetailMovie } from '../apiType.d.ts';
const internalApi = '/api/movieApi';

export const useDetailedMovieStore = defineStore('detailedMovie', () => {
  const searchingData = ref<DetailMovie>({} as DetailMovie);

  async function search(i: string, plot: string) {
    const { data: responseValue } = await axios({
      url: internalApi,
      method: 'POST',
      data: {
        ref: 'detail',
        i,
        plot,
      },
    });
    searchingData.value = responseValue;
  }

  function $reset() {
    searchingData.value = {} as DetailMovie;
  }

  return {
    searchingData,
    search,
    $reset,
  };
});
