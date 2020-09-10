import React from 'react';
import { Layout } from '../Layout';
import { Router } from '../Routes';
import { Global } from '@emotion/core';
import { GlobalStyles } from '../GlobalStyles';

const App: React.FC = () => (
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
);

export { App };
