import React, { ComponentType } from 'react';
import { Routes } from './Routes';
import { useRecoilValue } from 'recoil';
import { isAuthorizedState } from '../State/Auth';
import { RouteComponentProps, Redirect } from '@reach/router';

interface IPublicRoute extends RouteComponentProps {
  component: ComponentType<any>;
}

const PublicRoute = ({ component: Component }: IPublicRoute) => {
  const isAuthorized = useRecoilValue(isAuthorizedState);

  return isAuthorized ? (
    <Redirect noThrow to={Routes.Dashboard} />
  ) : (
    <Component />
  );
};

export { PublicRoute };
