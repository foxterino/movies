import React, { ComponentType } from 'react';
import { Routes } from './Routes';
import { useRecoilValue } from 'recoil';
import { isAuthorizedState } from '../State/Auth';
import { RouteComponentProps, Redirect } from '@reach/router';

interface IPrivateRoute extends RouteComponentProps {
  component: ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: IPrivateRoute) => {
  const isAuthorized = useRecoilValue(isAuthorizedState);

  return isAuthorized ? <Component /> : <Redirect noThrow to={Routes.SignIn} />;
};

export { PrivateRoute };
