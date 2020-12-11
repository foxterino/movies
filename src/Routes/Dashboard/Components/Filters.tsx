import React from 'react';
import { YearSelect } from './YearSelect';
import { GenreSelect } from './GenreSelect';
import { DashboardStyles as S } from '../Styles';

const Filters: React.FC = () => {
  return (
    <S.Filters>
      <YearSelect />
      <GenreSelect />
    </S.Filters>
  );
};

export { Filters };
