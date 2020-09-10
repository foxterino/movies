import React from 'react';

import { MainStyles as S } from './Styles';
import { Sidebar } from '../Shared/Sidebar';

const Main: React.FC = ({ children }) => (
  <S.Main>
    <Sidebar />
    {children}
  </S.Main>
);

export { Main };
