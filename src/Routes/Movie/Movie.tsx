import React, { useEffect } from 'react';
import { MovieStyles as S } from './Styles';
import { Spin, Image, Typography } from 'antd';
import { InfoTable } from './Components/InfoTable';
import { ActorsList } from './Components/ActorsList';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsSection } from './Components/CommentsSection';
import { fetchMovie, moviesSelectors } from '../../State/Ducks/Movies';

interface IMovie {
  id: number;
}

const Movie: React.FC<IMovie> = ({ id }) => {
  const movie = useSelector(moviesSelectors.movie);
  const loading = useSelector(moviesSelectors.movieLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  return movie && !loading ? (
    <S.Container>
      <S.Row>
        <S.Image src={movie.poster} alt={`${movie.title} poster`} />
        <S.MainCol>
          <Typography.Title>{movie.title}</Typography.Title>
          <InfoTable movie={movie} />
        </S.MainCol>
        <ActorsList actors={movie.actors} />
      </S.Row>
      <CommentsSection movie={movie} />
    </S.Container>
  ) : (
    <S.LoadingContainer>
      <Spin spinning={loading} />
    </S.LoadingContainer>
  );
};

export { Movie };
