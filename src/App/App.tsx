import 'antd/dist/antd.css';
import React from 'react';
import { Layout } from '../Layout';
import { Router } from '../Routes';
import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/core';
import { GlobalStyles } from '../GlobalStyles';

const App: React.FC = () => (
  <React.StrictMode>
    <RecoilRoot>
      <Global styles={GlobalStyles} />
      <Layout>
        <Router />
      </Layout>
    </RecoilRoot>
  </React.StrictMode>
);

export { App };
