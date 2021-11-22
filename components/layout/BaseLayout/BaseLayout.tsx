import { Header, Sidebar } from '@layouts';
import { Layout } from 'antd';
import React, { FC } from 'react';
require('./BaseLayout.less');

const { Content } = Layout;

export const BaseLayout: FC = props => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
