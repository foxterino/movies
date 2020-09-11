import React from 'react';
import { Routes } from './Routes';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { Dashboard } from './Dashboard';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Router as ReachRouter } from '@reach/router';

const Router: React.FC = () => (
  <ReachRouter>
    <PublicRoute path={Routes.SignUp} component={SignUp} />
    <PublicRoute path={Routes.SignIn} component={SignIn} />
    <PrivateRoute path={Routes.Dashboard} component={Dashboard} />
  </ReachRouter>
);

export { Router };
