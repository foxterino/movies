import { authReducer } from './Auth';
import { combineReducers } from 'redux';
import { moviesReducer } from './Movies';

export const rootReducer = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
