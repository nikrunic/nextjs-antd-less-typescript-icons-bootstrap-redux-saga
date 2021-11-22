import { Sidebar } from '@layouts';
import { Layout } from 'antd';
import React, { FC } from 'react';
require('./SubLayout.less');

const { Content } = Layout;

export const SubLayout: FC = props => {
  return (
    <>
      <Sidebar />
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
    </>
  );
};
