import React, { memo, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './button.module.css';

export type ButtonVariant = 'transparent' | 'primary';
interface ButtonProps
  extends React.ComponentProps<'button'> {
  className?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className = '',
    children,
    variant = 'transparent',
    ...rest
  } = props;
  return (
    <button
      className={clsx(className, cls.button, cls[variant])}
      {...rest}
    >
      {children}
    </button>
  );
});
