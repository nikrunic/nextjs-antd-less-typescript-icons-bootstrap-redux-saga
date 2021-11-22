import React from 'react';

import { Logo } from '@components';
require('./header.less');

export const Header: React.FC = () => {
  return (
    <div
      style={{ borderBottom:"1px solid #ddd", textAlign: 'center' }}
      data-testid="container"
    >
      <div className="logo_blk">
        <Logo />
      </div>
    </div>
  );
};
