import React, { memo } from 'react';
import {
  Link as RLink,
  LinkProps as RLinkProps,
} from 'react-router-dom';
import clsx from 'clsx';
import cls from './link.module.css';

interface LinkProps extends RLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export const Link = memo((props: LinkProps) => {
  const { className = '', children, to, ...rest } = props;
  return (
    // todo пофиксить
    <RLink className={clsx(className, cls.link)} to={to} {...rest}>
      {children}
    </RLink>
  );
});
