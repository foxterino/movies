import styled from '@emotion/styled';
import { Image, Input } from 'antd';

export const MovieStyles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    padding: 2rem 0;
  `,
  LoadingContainer: styled.div`
    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
  `,
  MainCol: styled.div`
    display: flex;
    flex: 75%;
    flex-direction: column;

    margin: 0 2rem;
  `,
  SideCol: styled.div`
    display: flex;
    flex: 25%;
    flex-direction: column;

    margin-left: 2rem;
  `,
  Row: styled.div`
    display: flex;

    margin-bottom: 2rem;
    padding: 0 2rem;
  `,
  Col: styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 2rem;
  `,
  Image: styled(Image)`
    max-width: 350px;

    margin-right: 2rem;
  `,
  TextArea: styled(Input.TextArea)`
    margin-bottom: 0.5rem;
  `,
};
