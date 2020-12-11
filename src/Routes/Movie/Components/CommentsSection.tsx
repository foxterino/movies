import React from 'react';
import { CommentForm } from './CommentForm';
import { MovieStyles as S } from '../Styles';
import { CommentsList } from './CommentsList';
import { IMovie } from '../../../Api/Types/Movie';

interface ICommentsSection {
  movie: IMovie;
}

const CommentsSection: React.FC<ICommentsSection> = ({ movie }) => {
  return (
    <S.Col>
      <CommentForm movieId={movie.id} />
      <CommentsList comments={movie.comments} />
    </S.Col>
  );
};

export { CommentsSection };
