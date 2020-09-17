import React, { ComponentType } from 'react';
import { Routes } from './Routes';
import { useSelector } from 'react-redux';
import { authSelectors } from '../State/Ducks/Auth';
import { RouteComponentProps, Redirect } from '@reach/router';

interface IPrivateRoute extends RouteComponentProps {
  component: ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: IPrivateRoute) => {
  const isAuthorized = useSelector(authSelectors.isAuthorized);

  return isAuthorized ? <Component /> : <Redirect noThrow to={Routes.SignIn} />;
};

export { PrivateRoute };
