import { IAuthState } from './Types';

const all = (state: IAuthState) => state.auth;

const isAuthorized = (state: IAuthState) => all(state).isAuthorized;

const isLoading = (state: IAuthState) => all(state).isLoading;

const error = (state: IAuthState) => all(state).error;

export const authSelectors = {
  all,
  isAuthorized,
  isLoading,
  error,
};
