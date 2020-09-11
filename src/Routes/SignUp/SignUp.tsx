import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Routes } from '../Routes';
import { Link } from '@reach/router';
import { useSetRecoilState } from 'recoil';
import { SignInStyles as S } from './Styles';
import { AuthService } from '../../Service/auth';
import { isAuthorizedState } from '../../State/Auth';

const singUpValues = {
  email: '',
  username: '',
  password: '',
};

const SignUp: React.FC = () => {
  const setAuthorized = useSetRecoilState(isAuthorizedState);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    isSubmitting,
    values,
  } = useFormik({
    initialValues: singUpValues,
    onSubmit: async (credentials, actions) => {
      actions.setSubmitting(false);

      try {
        await AuthService.signUp(credentials);

        setAuthorized(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    },
  });

  const resetErrorMessage = () => setErrorMessage('');

  return (
    <div>
      <S.Form onChange={resetErrorMessage} onSubmit={handleSubmit}>
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
        <S.Input
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <S.SubmitButton
          block
          type="primary"
          htmlType="submit"
          disabled={isSubmitting}
        >
          Sign Up
        </S.SubmitButton>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        Already have an account?
        <Link to={Routes.SignIn}> Sign In</Link>
      </S.Form>
    </div>
  );
};

export { SignUp };
