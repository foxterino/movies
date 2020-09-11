import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Routes } from '../Routes';
import { Link } from '@reach/router';
import { useSetRecoilState } from 'recoil';
import { SignInStyles as S } from './Styles';
import { AuthService } from '../../Service/auth';
import { isAuthorizedState } from '../../State/Auth';
import { ISignInValues } from '../../Api/Types/Auth';

const singInValues: ISignInValues = {
  username: '',
  password: '',
};

const SignIn: React.FC = () => {
  const setAuthorized = useSetRecoilState(isAuthorizedState);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    isSubmitting,
    values,
  } = useFormik({
    initialValues: singInValues,
    onSubmit: async (credentials, actions) => {
      actions.setSubmitting(false);

      try {
        await AuthService.signIn(credentials);

        setAuthorized(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    },
  });

  const resetErrorMessage = () => setErrorMessage('');

  return (
    <S.Form onChange={resetErrorMessage} onSubmit={handleSubmit}>
      <S.Input
        name="username"
        value={values.username}
        placeholder="Username"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <S.PasswordInput
        name="password"
        value={values.password}
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <S.SubmitButton
        block
        type="primary"
        disabled={isSubmitting}
        htmlType="submit"
      >
        Sign In
      </S.SubmitButton>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      Or
      <Link to={Routes.SignUp}> Sign Up </Link>
      now!
    </S.Form>
  );
};

export { SignIn };
