import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Routes } from '../Routes';
import { Link } from '@reach/router';
import { SignInStyles as S } from './Styles';
import { ISignInValues } from '../../Api/Types/Auth';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, resetError, signIn } from '../../State/ducks/Auth';

const singInValues: ISignInValues = {
  username: '',
  password: '',
};

const SignIn: React.FC = () => {
  const isLoading = useSelector(authSelectors.isLoading);
  const error = useSelector(authSelectors.error);

  const dispatch = useDispatch();

  const { handleSubmit, handleBlur, handleChange, values } = useFormik({
    initialValues: singInValues,
    onSubmit: credentials => {
      dispatch(signIn(credentials));
    },
  });

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const handleResetError = () => dispatch(resetError());

  return (
    <S.Form onChange={handleResetError} onSubmit={handleSubmit}>
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
        loading={isLoading}
        htmlType="submit"
      >
        Sign In
      </S.SubmitButton>
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
      Or
      <Link to={Routes.SignUp}> Sign Up </Link>
      now!
    </S.Form>
  );
};

export { SignIn };
