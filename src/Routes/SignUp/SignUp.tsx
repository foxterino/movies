import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Routes } from '../Routes';
import { Link } from '@reach/router';
import { useSetRecoilState } from 'recoil';
import { SignInStyles as S } from './Styles';
import { AuthService } from '../../Service/auth';
import { isAuthorizedState } from '../../State/Auth';
import { ISignUpValues } from '../../Api/Types/Auth';

const singUpValues: ISignUpValues = {
  email: '',
  username: '',
  password: '',
};

const SignUp: React.FC = () => {
  const setAuthorized = useSetRecoilState(isAuthorizedState);

  const [isLoading, setLoading] = useState(false);
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
      setLoading(true);
      actions.setSubmitting(false);

      try {
        await AuthService.signUp(credentials);

        setAuthorized(true);
      } catch (error) {
        setErrorMessage(error.message);
      }

      setLoading(false);
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
          loading={isLoading || isSubmitting}
          htmlType="submit"
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
