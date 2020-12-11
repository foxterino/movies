import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Routes } from '../Routes';
import { Link } from '@reach/router';
import { SignUpStyles as S } from './Styles';
import { ISignUpValues } from '../../Api/Types/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, resetError, signUp } from '../../State/Ducks/Auth';

const singUpValues: ISignUpValues = {
  email: '',
  username: '',
  password: '',
};

const SignUp: React.FC = () => {
  const isLoading = useSelector(authSelectors.isLoading);
  const error = useSelector(authSelectors.error);

  const dispatch = useDispatch();

  const { handleSubmit, handleBlur, handleChange, values } = useFormik({
    initialValues: singUpValues,
    onSubmit: credentials => {
      dispatch(signUp(credentials));
    },
  });

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const handleResetError = () => dispatch(resetError());

  return (
    <S.Container>
      <S.Form onChange={handleResetError} onSubmit={handleSubmit}>
        <S.Input
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
          Sign Up
        </S.SubmitButton>
        {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        Already have an account?
        <Link to={Routes.SignIn}> Sign In</Link>
      </S.Form>
    </S.Container>
  );
};

export { SignUp };
