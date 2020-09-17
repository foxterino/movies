import React, { ComponentType } from 'react';
import { Routes } from './Routes';
import { useSelector } from 'react-redux';
import { authSelectors } from '../State/ducks/Auth';
import { RouteComponentProps, Redirect } from '@reach/router';

interface IPublicRoute extends RouteComponentProps {
  component: ComponentType<any>;
}

const PublicRoute = ({ component: Component }: IPublicRoute) => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);

  return isAuthorized ? (
    <Redirect noThrow to={Routes.Dashboard} />
  ) : (
    <Component />
  );
};

export { PublicRoute };
