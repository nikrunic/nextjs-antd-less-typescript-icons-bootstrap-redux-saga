import { Logo } from '@components/layout/logo';
import React from 'react';
import Image from 'next/image';
import loginBG from '@public/images/loginBG.gif';

require('./splash.less');
interface SplashProps {
  // logo: any;
}
export const Splash: React.FC = () => {
  return (
    <div
      id="wrapper"
      className="loginMain_blk d-flex flex-row align-content-stretch"
    >
      <div className="colCont d-flex col pr-5 pl-3">
        <div className="d-flex flex-column align-items-center justify-content-center w-100">
          <div className="d-flex flex-column w-100 position-relative">
            <div className="second text-center">
              <div className="logo_blk"><Logo /></div>
              <div className="text">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
