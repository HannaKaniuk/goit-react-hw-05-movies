import { fetchMovieInform } from 'helppers/fetch';
import React, { Suspense, useEffect, useState } from 'react';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import {
  MovieContainer,
  List,
  AdditionalWrp,
  LinkInfo,
  InfoWrp,
  ImgWrp,
  Img,
  ListGenres,
  LineDiv,
  LinkBtn,
  BackDiv,
} from './MoviesDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const movieDetails = await fetchMovieInform(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo;

  const releaseDate = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const defaultMovieImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <BackDiv>
        <LinkBtn onClick={() => navigate(-1)}>
          Go back
          <FaArrowRotateLeft />
        </LinkBtn>
      </BackDiv>
      {loading && <Loader />}
      {movieInfo && (
        <MovieContainer>
          <ImgWrp>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultMovieImg
              }
              alt={original_title}
            />
          </ImgWrp>
          <InfoWrp>
            <h2>
              {title}({releaseDate})
            </h2>
            <p>User score:{userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ListGenres>
              {genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ListGenres>
          </InfoWrp>
        </MovieContainer>
      )}
      <AdditionalWrp>
        <LineDiv>
          <h3>Additional information</h3>
          <List>
            <li>
              <LinkInfo to="cast">Cast</LinkInfo>
            </li>
            <li>
              <LinkInfo to="reviews">Reviews</LinkInfo>
            </li>
          </List>
        </LineDiv>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AdditionalWrp>
    </div>
  );
};

export default MoviesDetails;
