import React, { useState } from 'react';
import { debounce } from 'debounce';
import { Routes } from '../../Routes';
import { Empty, Input, message } from 'antd';
import { LayoutStyles as S } from '../Styles';
import { IMovie } from '../../Api/Types/Movie';
import { MoviesApi } from '../../Api/MoviesApi';

const Search: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setLoading] = useState(false);

  const handleSearch = async (value: string) => {
    if (!value) {
      setMovies([]);

      return;
    }

    setLoading(true);

    try {
      const response = await MoviesApi.searchMovies(value);

      setMovies(response);
    } catch (error) {
      message.error('Failed to fetch search results');
    }

    setLoading(false);
  };

  return (
    <S.Search
      options={movies.map(({ title, id, poster }) => ({
        key: id,
        value: title,
        label: (
          <S.SearchItem to={`${Routes.Movie}/${id}`}>
            {title}
            <S.SearchItemImage src={poster} alt={`${title} poster`} />
          </S.SearchItem>
        ),
      }))}
      onSearch={debounce(handleSearch, 500)}
      notFoundContent="No results"
    >
      <Input.Search loading={isLoading} placeholder="Search by title..." />
    </S.Search>
  );
};

export { Search };
