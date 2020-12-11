import React from 'react';
import { Header } from './Header';
import { useSelector } from 'react-redux';
import { Layout as AntdLayout } from 'antd';
import { LayoutStyles as S } from './Styles';
import { authSelectors } from '../State/Ducks/Auth';

const Layout: React.FC = ({ children }) => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);

  return (
    <AntdLayout>
      {isAuthorized && <Header />}
      <S.Content>{children}</S.Content>
    </AntdLayout>
  );
};

export { Layout };
