import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchTrendingList } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import { HomeDiv, HomeTitle } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      fetchTrendingList()
        .then(trendingMovies => {
          setMovies(trendingMovies);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrendingMovies();
  }, []);
  return (
    <HomeDiv>
      <HomeTitle>Trending today</HomeTitle>
      <TrendingList movies={movies} />
      {loading && <Loader />}
    </HomeDiv>
  );
};

export default Home;
