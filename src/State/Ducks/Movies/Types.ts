import { IMovie, IOrder } from '../../../Api/Types/Movie';

export interface IMoviesState {
  movies: IMovies;
}

export interface IMovies {
  movies: IMovie[];
  year: string | null;
  order: IOrder;
  genre: string | null;
  movie: IMovie | null;
  moviesLoading: boolean;
  movieLoading: boolean;
  commentLoading: boolean;
}
