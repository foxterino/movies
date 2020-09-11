import styled from '@emotion/styled';
import { Button, Input } from 'antd';

export const SignInStyles = {
  Form: styled.form`
    max-width: 400px;
  `,
  Input: styled(Input)`
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
