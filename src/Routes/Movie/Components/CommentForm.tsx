import React, { useState } from 'react';
import { Button } from 'antd';
import { MovieStyles as S } from '../Styles';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, moviesSelectors } from '../../../State/Ducks/Movies';

export interface ICommentFormProps {
  movieId: number;
}

const CommentForm: React.FC<ICommentFormProps> = ({ movieId }) => {
  const [text, setText] = useState('');
  const loading = useSelector(moviesSelectors.commentLoading);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value);

  const clearText = () => setText('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(addComment({ movieId, text }, clearText));
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.TextArea rows={4} onChange={handleChange} value={text} />
      <Button htmlType="submit" loading={loading} type="primary">
        Add Comment
      </Button>
    </form>
  );
};

export { CommentForm };
