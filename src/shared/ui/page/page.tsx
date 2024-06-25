import React, { ReactNode } from 'react';
import clsx from 'clsx';
import cls from './page.module.css';

interface PageProps {
  className?: string;
  children?: ReactNode;
  centerContent?: boolean;
}

export const Page = (props: PageProps) => {
  const { className = '', children, centerContent } = props;
  return (
    <div
      className={clsx(className, cls.page, {
        [cls.center]: centerContent,
      })}
    >
      {children}
    </div>
  );
};
