import { defineStore } from 'pinia';
import { ref } from 'vue';

import axios from 'axios';

import { DetailMovie } from '../apiType';
const internalApi = 'http://localhost:5173/api/movieApi';

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

  return {
    searchingData,
    search,
  };
});
