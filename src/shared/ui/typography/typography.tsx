import React, { memo, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './typography.module.css';

export type Variant = 'p' | 'h1' | 'h2' | 'h3';
export type Affects = 'error' | 'none';

interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children?: ReactNode;
  variant?: Variant;
  affects?: Affects;
}

export const Typography = memo((props: TypographyProps) => {
  const {
    className = '',
    children,
    variant = 'p',
    affects = 'none',
    ...rest
  } = props;
  const Comp = variant || 'p';
  return (
    <Comp
      className={clsx(
        className,
        cls[variant],
        cls[affects],
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
});
