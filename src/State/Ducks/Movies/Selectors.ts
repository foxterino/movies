import { IMoviesState } from './Types';

const all = (state: IMoviesState) => state.movies;

const movies = (state: IMoviesState) => all(state).movies;

const year = (state: IMoviesState) => all(state).year;

const genre = (state: IMoviesState) => all(state).genre;

const order = (state: IMoviesState) => all(state).order;

const movie = (state: IMoviesState) => all(state).movie;

const moviesLoading = (state: IMoviesState) => all(state).moviesLoading;

const movieLoading = (state: IMoviesState) => all(state).movieLoading;

const commentLoading = (state: IMoviesState) => all(state).commentLoading;

export const moviesSelectors = {
  all,
  movies,
  year,
  genre,
  order,
  movie,
  moviesLoading,
  movieLoading,
  commentLoading,
};
