import React, { ReactNode } from 'react';
import clsx from 'clsx';
import cls from './box.module.css';

interface BoxProps extends React.ComponentProps<'div'> {
  className?: string;
  children?: ReactNode;
}

export const Box = (props: BoxProps) => {
  const { className = '', children, ...rest } = props;
  return (
    <div className={clsx(cls.box, className)} {...rest}>
      {children}
    </div>
  );
};
