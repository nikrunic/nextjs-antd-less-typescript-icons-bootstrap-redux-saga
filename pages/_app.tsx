import React, { Fragment } from "react";
import store from '@redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
require('../styles/globals.less');

const MyApp = ({ Component, pageProps }): JSX.Element => {
  const MainLayout = Component.mainLayout ?? Fragment;
  const ChildLayout = Component.childLayout ?? Fragment;
  return (
    <Provider store={store}>
      <MainLayout>
        <ChildLayout>
          <Component {...pageProps} />
        </ChildLayout>
      </MainLayout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
