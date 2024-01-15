import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchSearchMovies } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import { SearchDiv, Form, StyledSearchIcon } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import { HomeDiv, TextInfo } from '../Home/Home.styled';
import { Loader } from 'components/Loader/Loader';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [noName, setNoName] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    const fetchMoviesSearch = () => {
      setLoading(true);
      fetchSearchMovies(searchQuery)
        .then(movies => {
          setMovies(movies);
          // setNoName(queryMovieName.length === 0);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (searchQuery) {
      fetchMoviesSearch();
    } else {
      setMovies([]);
      // setNoName(false);
      setLoading(false);
    }
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuery: form.elements.searchQuery.value });
    form.reset();
  };

  return (
    <HomeDiv>
      <SearchDiv>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter movie name..."
            name="searchQuery"
            autoFocus
            // value={query}
          />
          <button type="submit">
            <StyledSearchIcon />
          </button>
        </Form>
      </SearchDiv>

      {loading && <Loader />}
      {movies.length > 0 && <TrendingList movies={movies} />}
      {movies.length === 0 && searchQuery && (
        <TextInfo>
          There is no movies with this request. Please, try again
        </TextInfo>
      )}
    </HomeDiv>
  );
}

export default Movies;
