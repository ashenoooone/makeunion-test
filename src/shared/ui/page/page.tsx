import React, { ReactNode } from 'react';
import clsx from 'clsx';
import cls from './page.module.css';

interface PageProps {
  className?: string;
  children?: ReactNode;
}

export const Page = (props: PageProps) => {
  const { className = '', children } = props;
  return <div className={clsx(className, cls.page)}>{children}</div>;
};
