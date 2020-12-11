import React from 'react';
import { List, Typography } from 'antd';
import { MovieStyles as S } from '../Styles';

export interface IActorsList {
  actors: string[];
}

const ActorsList: React.FC<IActorsList> = ({ actors }) => {
  return (
    <S.SideCol>
      <Typography.Title level={4}>Main roles:</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={actors}
        renderItem={actor => <List.Item>{actor}</List.Item>}
      />
    </S.SideCol>
  );
};

export { ActorsList };
