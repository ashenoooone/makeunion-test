import React, { memo } from 'react';
import clsx from 'clsx';
import cls from './loader.module.css';

interface LoaderProps {
  className?: string;
  centered?: boolean;
}

export const Loader = memo((props: LoaderProps) => {
  const { className = '', centered = false } = props;
  return (
    <span
      className={clsx(cls.loader, className, {
        [cls.centered]: centered,
      })}
    ></span>
  );
});
