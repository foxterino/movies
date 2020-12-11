import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { AutoComplete, Layout } from 'antd';

export const LayoutStyles = {
  Content: styled(Layout.Content)`
    background-color: #fff;
  `,
  Search: styled(AutoComplete)`
    width: 500px;
  `,
  SearchItem: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  SearchItemImage: styled.img`
    width: 32px;
    height: 48px;
  `,
};
