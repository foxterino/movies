import React, { useState } from 'react';
import { Button } from 'antd';
import { MovieStyles as S } from '../Styles';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, moviesSelectors } from '../../../State/Ducks/Movies';

export interface ICommentFormProps {
  movieId: number;
}

const CommentForm: React.FC<ICommentFormProps> = ({ movieId }) => {
  const [value, setValue] = useState('');
  const loading = useSelector(moviesSelectors.commentLoading);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  const resetValue = () => setValue('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      dispatch(addComment({ movieId, text: value }, resetValue));

      setValue('');
    } catch (error) {
      setValue(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.TextArea rows={4} onChange={handleChange} value={value} />
      <Button htmlType="submit" loading={loading} type="primary">
        Add Comment
      </Button>
    </form>
  );
};

export { CommentForm };
