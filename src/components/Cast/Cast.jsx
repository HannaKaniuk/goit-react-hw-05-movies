import { fetchActors } from 'helppers/fetch';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, Name, Character, Item, ActorImage } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCast = () => {
      fetchActors(movieId)
        .then(actorsInfo => {
          setLoading(true);
          setActors(actorsInfo);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchCast();
  }, [movieId]);
  const defaultMovieImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <CastList>
      {loading && <Loader />}
      {actors.map(({ name, character, id, profile_path, original_title }) => (
        <Item key={id}>
          <ActorImage
            width="150px"
            height="225px"
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultMovieImg
            }
            alt={original_title}
          />
          <Name>{name}</Name>
          <Character>Character:{character}</Character>
        </Item>
      ))}
    </CastList>
  );
};
export default Cast;
