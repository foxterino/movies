import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export { Layout };
