import styled from '@emotion/styled';
import { Button, Input } from 'antd';

export const SignInStyles = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
  Form: styled.form`
    max-width: 400px;
  `,
  Input: styled(Input)`
    margin-bottom: 1.25rem;
  `,
  PasswordInput: styled(Input.Password)`
    margin-bottom: 1.25rem;
  `,
  SubmitButton: styled(Button)`
    margin-bottom: 0.75rem;
  `,
  ErrorMessage: styled.p`
    color: red;
    margin-bottom: 0.75rem;
  `,
};
