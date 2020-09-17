import { Dispatch } from 'react';
import { AuthApi } from '../../../Api/AuthApi';
import { authFailure, authSuccess, processAuth } from './Slice';
import { ISignInValues, ISignUpValues } from '../../../Api/Types/Auth';

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
