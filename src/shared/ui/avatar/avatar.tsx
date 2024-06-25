import clsx from 'clsx';
import cls from './avatar.module.css';
import React, { memo } from 'react';

interface AvatarProps extends React.ComponentProps<'img'> {
  className?: string;
  href?: string;
  fallback?: string;
  size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className = '',
    src,
    size = 50,
    alt,
    fallback,
    ...rest
  } = props;
  return (
    <div
      className={cls.container}
      style={{
        width: size,
        height: size,
      }}
    >
      {fallback && !src && (
        <span className={clsx(className, cls.fallback)}>
          {fallback}
        </span>
      )}
      <img
        className={clsx(className, cls.avatar)}
        src={src}
        alt={alt}
        {...rest}
      />
    </div>
  );
});
