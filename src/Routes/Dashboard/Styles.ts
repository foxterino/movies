import styled from '@emotion/styled';
import { List } from 'antd';
import { colors } from '../../../Theme/Colors';

export const DashboardStyles = {
  Container: styled.div`
    display: flex;
    justify-content: center;

    padding: 1rem;
  `,
  Content: styled.div`
    width: 100%;
    max-width: 600px;
  `,
  ListItem: styled(List.Item)`
    padding: 1rem 2rem;

    border: 1px solid transparent;
    border-radius: 2px;

    transition: all 300ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    cursor: pointer;

    &:hover {
      background-color: ${colors.lynxWhite};
    }
  `,
  ListImage: styled.img`
    width: 64px;
    height: 96px;

    border-radius: 2px;
  `,
  Filters: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 250px;

    margin-right: 2rem;
  `,
};
