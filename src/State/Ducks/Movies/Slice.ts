import { IMovies } from './Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment, IMovie, IOrder } from '../../../Api/Types/Movie';

const initialOrder: IOrder = {
  column: 'title',
  direction: 'asc',
};

const initialState: IMovies = {
  movies: [],
  year: null,
  order: initialOrder,
  genre: null,
  movie: null,
  commentLoading: false,
  movieLoading: false,
  moviesLoading: false,
};

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesLoading: state => {
      state.moviesLoading = true;
    },
    fetchMoviesSuccess: (state, action: PayloadAction<IMovie[]>) => {
      state.moviesLoading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure: state => {
      state.moviesLoading = false;
    },
    fetchMovieLoading: state => {
      state.movieLoading = true;
    },
    fetchMovieSuccess: (state, action: PayloadAction<IMovie>) => {
      state.movieLoading = false;
      state.movie = action.payload;
    },
    fetchMovieFailure: state => {
      state.movieLoading = false;
    },
    reorderMovies: (state, action: PayloadAction<IOrder>) => {
      state.order = action.payload;
    },
    selectYear: (state, action: PayloadAction<string | null>) => {
      state.year = action.payload;
    },
    selectGenre: (state, action: PayloadAction<string | null>) => {
      state.genre = action.payload;
    },
    addCommentLoading: state => {
      state.commentLoading = true;
    },
    addCommentSuccess: (state, action: PayloadAction<IComment>) => {
      state.commentLoading = false;
      state.movie?.comments.push(action.payload);
    },
    addCommentFailure: state => {
      state.commentLoading = false;
    },
  },
});

const { actions, reducer } = movies;

export const {
  fetchMoviesLoading,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieLoading,
  fetchMovieSuccess,
  fetchMovieFailure,
  addCommentLoading,
  addCommentSuccess,
  addCommentFailure,
  reorderMovies,
  selectYear,
  selectGenre,
} = actions;
export const moviesReducer = reducer;
