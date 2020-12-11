import React from 'react';
import { List } from 'antd';
import { Icon } from '../../../Shared/Icon';
import { DashboardStyles as S } from '../Styles';
import { IMovie } from '../../../Api/Types/Movie';
import { MessageOutlined, StarOutlined } from '@ant-design/icons';

interface IMoviesListItem {
  movie: IMovie;
  onClick: () => void;
}

const MoviesListItem: React.FC<IMoviesListItem> = ({ onClick, movie }) => {
  const { comments, genres, poster, rating, title, year } = movie;
  const listOfGenres = genres.map(genre => genre.name).join(', ');
  const description = `${year} • ${listOfGenres}`;

  return (
    <S.ListItem
      onClick={onClick}
      actions={[
        <Icon icon={StarOutlined}>{rating}</Icon>,
        <Icon icon={MessageOutlined}>{comments.length}</Icon>,
      ]}
      extra={<S.ListImage src={poster} alt={`${title} poster`} />}
    >
      <List.Item.Meta title={title} description={description} />
    </S.ListItem>
  );
};

export { MoviesListItem };
