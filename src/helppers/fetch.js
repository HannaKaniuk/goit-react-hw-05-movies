import axios from 'axios';

const KEY = '4bfe9ac7b716325880075e348301b2b8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// список найпопулярніших фільмів на сьогодні
export const fetchTrendingList = async () => {
  try {
    const { data } = await axios.get('trending/movie/day', {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });

    return data.results;
  } catch (error) {
    console.error('Error fetching trends:', error);
    throw error;
  }
};

// пошук фільму за ключовим словом на сторінці фільмів
export const fetchSearchMovies = async query => {
  try {
    const { data } = await axios.get('search/movie', {
      params: {
        api_key: KEY,
        query,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
// запит повної інформації про фільм для сторінки кінофільму
export const fetchMovieInform = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching movie information:', error);
    throw error;
  }
};
//запит інформації про акторський склад для сторінки кінофільму
export const fetchActors = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data.cast;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw error;
  }
};
//запит оглядів для сторінки кінофільму
export const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};
