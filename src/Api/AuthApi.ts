import { del, post } from './index';
import { ISignUpValues, IAuthResponse, ISignInValues } from './Types/Auth';

const signUp = (credentials: ISignUpValues): Promise<IAuthResponse> =>
  post('/auth/signup', credentials);

const signIn = (credentials: ISignInValues): Promise<IAuthResponse> =>
  post('/auth/signin', credentials);

const signOut = (): Promise<void> => del('/auth/signout');

export const AuthApi = {
  signUp,
  signIn,
  signOut,
};
