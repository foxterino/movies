import React, { useEffect, useMemo, useState } from 'react';
import { List } from 'antd';
import { Routes } from '../../Routes';
import { useNavigate } from '@reach/router';
import { MoviesListItem } from './MoviesListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, moviesSelectors } from '../../../State/Ducks/Movies';

const DEFAULT_PAGE_SIZE = 20;

interface IPage {
  page: number;
  pageSize: number;
}

const MoviesList: React.FC = () => {
  const movies = useSelector(moviesSelectors.movies);
  const total = useMemo(() => movies.length, [movies]);
  const year = useSelector(moviesSelectors.year);
  const genre = useSelector(moviesSelectors.genre);
  const order = useSelector(moviesSelectors.order);
  const loading = useSelector(moviesSelectors.moviesLoading);

  const [paging, setPaging] = useState<IPage>({
    page: 0,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, order, year, genre]);

  useEffect(() => {
    const { page, pageSize } = paging;
    const newNumberOfPages = Math.ceil(total / pageSize);

    if (total && newNumberOfPages < page + 1) {
      setPaging({ page: 0, pageSize });
    }
  }, [total, paging]);

  const handleClick = (id: number) => () => navigate(`${Routes.Movie}/${id}`);

  const handlePageChange = (page: number) =>
    setPaging(prevState => ({ ...prevState, page: page - 1 }));

  const handlePageSizeChange = (page: number, pageSize: number) =>
    setPaging({ page: page - 1, pageSize });

  return (
    <List
      itemLayout="vertical"
      split={false}
      pagination={{
        current: paging.page + 1,
        pageSize: paging.pageSize,
        defaultPageSize: DEFAULT_PAGE_SIZE,
        total,
        onChange: handlePageChange,
        onShowSizeChange: handlePageSizeChange,
      }}
      loading={loading}
      dataSource={movies}
      renderItem={movie => (
        <MoviesListItem movie={movie} onClick={handleClick(movie.id)} />
      )}
    />
  );
};

export { MoviesList };
