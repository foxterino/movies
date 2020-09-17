import { RootState, rootReducer } from './ducks';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const createStore = () => {
  const defaultMiddleware = getDefaultMiddleware<RootState>();
  const middleware = [...defaultMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  return store;
};

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
