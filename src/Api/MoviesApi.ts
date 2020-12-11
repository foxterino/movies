import { get, post } from './index';

import { IAddCommentRequest, IMovie, IMoviesRequest } from './Types/Movie';

const getMovies = ({ genre, year, order }: IMoviesRequest): Promise<IMovie[]> =>
  get('/movies/', { 'genres.name': genre, year, ...order });

const searchMovies = (query: string): Promise<IMovie[]> =>
  get(`/movies/search/?title=${query}`);

const getMovie = (id: number): Promise<IMovie> => get(`/movies/${id}`);

const addComment = ({ movieId, text }: IAddCommentRequest) =>
  post(`comments/${movieId}`, { text });

export const MoviesApi = {
  getMovies,
  searchMovies,
  getMovie,
  addComment,
};
