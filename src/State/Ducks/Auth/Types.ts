export interface IAuthState {
  auth: IAuth;
}

export interface IAuth {
  isAuthorized: boolean;
  isLoading: boolean;
  error: Error | null;
}
