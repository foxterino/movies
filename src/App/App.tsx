import 'antd/dist/antd.css';
import React from 'react';
import { store } from '../State';
import { Layout } from '../Layout';
import { Router } from '../Routes';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { GlobalStyles } from '../GlobalStyles';

const App: React.FC = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <Layout>
        <Router />
      </Layout>
    </Provider>
  </React.StrictMode>
);

export { App };
