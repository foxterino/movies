import { message } from 'antd';
import { Dispatch } from 'react';
import { RootState } from '../index';
import { MoviesApi } from '../../../Api/MoviesApi';
import { IAddCommentRequest } from '../../../Api/Types/Movie';
import {
  addCommentFailure,
  addCommentLoading,
  addCommentSuccess,
  fetchMovieFailure,
  fetchMovieLoading,
  fetchMoviesFailure,
  fetchMoviesLoading,
  fetchMovieSuccess,
  fetchMoviesSuccess,
} from './Slice';

export const fetchMovies = () => async (
  dispatch: Dispatch<any>,
  getState: () => RootState,
) => {
  const state = getState();
  const { genre, year, order } = state.movies;

  dispatch(fetchMoviesLoading());

  try {
    const response = await MoviesApi.getMovies({ year, genre, order });

    dispatch(fetchMoviesSuccess(response));
  } catch (error) {
    message.error('Failed to fetch movies');

    dispatch(fetchMoviesFailure());
  }
};

export const fetchMovie = (id: number) => async (dispatch: Dispatch<any>) => {
  dispatch(fetchMovieLoading());

  try {
    const movie = await MoviesApi.getMovie(id);

    dispatch(fetchMovieSuccess(movie));
  } catch (error) {
    message.error('Failed to fetch movie');

    dispatch(fetchMovieFailure());
  }
};

export const addComment = (
  params: IAddCommentRequest,
  onSuccess: () => void,
) => async (dispatch: Dispatch<any>) => {
  dispatch(addCommentLoading);

  try {
    const comment = await MoviesApi.addComment(params);

    onSuccess();
    dispatch(addCommentSuccess(comment));
  } catch (error) {
    message.error('Failed to add comment');

    dispatch(addCommentFailure());
  }
};
