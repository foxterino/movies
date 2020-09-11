import { post } from './index';
import { ISignUpValues, IAuthResponse, ISignInValues } from './Types/Auth';

const signUp = (credentials: ISignUpValues): Promise<IAuthResponse> =>
  post('/auth/signup', credentials);

const signIn = (credentials: ISignInValues): Promise<IAuthResponse> =>
  post('/auth/signin', credentials);

export const AuthApi = {
  signUp,
  signIn,
};
