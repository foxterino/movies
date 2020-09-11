import { AuthApi } from '../Api/Auth';
import { ISignInValues, ISignUpValues } from '../Api/Types/Auth';

const signUp = (credentials: ISignUpValues) => AuthApi.signUp(credentials);

const signIn = (credentials: ISignInValues) => AuthApi.signIn(credentials);

export const AuthService = {
  signUp,
  signIn,
};
