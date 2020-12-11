import React from 'react';
import { Filters } from './Components/Filters';
import { DashboardStyles as S } from './Styles';
import { MoviesList } from './Components/MoviesList';
import { OrderSelect } from './Components/OrderSelect';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Filters />
      <S.Content>
        <OrderSelect />
        <MoviesList />
      </S.Content>
    </S.Container>
  );
};

export { Dashboard };
