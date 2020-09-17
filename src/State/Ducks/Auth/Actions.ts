import { Dispatch } from 'react';
import { AuthApi } from '../../../Api/AuthApi';
import { ISignInValues, ISignUpValues } from '../../../Api/Types/Auth';
import { authFailure, authSuccess, processAuth, logoutSuccess } from './Slice';

export const signUp = (credentials: ISignUpValues) => async (
  dispatch: Dispatch<any>,
) => {
  try {
    dispatch(processAuth());

    await AuthApi.signUp(credentials);

    dispatch(authSuccess());
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const signIn = (credentials: ISignInValues) => async (
  dispatch: Dispatch<any>,
) => {
  try {
    dispatch(processAuth());

    await AuthApi.signIn(credentials);

    dispatch(authSuccess());
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const signOut = () => async (dispatch: Dispatch<any>) => {
  await AuthApi.signOut();

  dispatch(logoutSuccess());
};
