import { IAuth } from './Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAuth = {
  isAuthorized: false,
  isLoading: false,
  error: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    processAuth: state => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: state => {
      state.isLoading = false;
      state.isAuthorized = true;
    },
    authFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetError: state => {
      state.error = null;
    },
  },
});

const { actions, reducer } = auth;

export const { authFailure, authSuccess, processAuth, resetError } = actions;
export const authReducer = reducer;
