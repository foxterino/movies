import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { useSelector } from 'react-redux';
import { authSelectors } from '../State/Ducks/Auth';

const Layout: React.FC = ({ children }) => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);

  return (
    <>
      {isAuthorized && <Header />}
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export { Layout };
