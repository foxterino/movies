export interface ISignInValues {
  username: string;
  password: string;
}

export interface ISignUpValues {
  email: string;
  username: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
}
