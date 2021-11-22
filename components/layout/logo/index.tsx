import React from 'react';
import Image from 'next/image';
import logo from '@public/images/logo.jpg';
import logoWhite from '@public/images/logo.jpg';

interface LogoProps {
  // logo: any;
  type?: string;
  className?: string;
  alt?: string;
}
export const Logo: React.FC<LogoProps> = ({ type, className, alt }) => {
  const srcUrl = type === 'white' ? logoWhite : logo;
  const addClassName = className === undefined ? '' : className;
  const altText = alt === undefined ? 'Matrix Logo' : alt;
  return (
    <Image src={srcUrl} alt={altText} className={`logo ${addClassName}`} />
  );
};
