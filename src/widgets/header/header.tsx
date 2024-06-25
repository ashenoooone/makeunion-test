import React, { memo } from 'react';
import clsx from 'clsx';
import cls from './header.module.css';
import { Link } from '~/shared/ui/link/link.tsx';
import { RoutesPaths } from '~/shared/routes';

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className = '' } = props;
  return (
    <header className={clsx(className, cls.header)}>
      <div className={cls.container}>
        <Link
          className={clsx(cls.link)}
          to={RoutesPaths.main}
        >
          Главная
        </Link>
        <Link
          className={clsx(cls.link)}
          to={RoutesPaths.task1_html_css}
        >
          Задание 1
        </Link>
        <Link
          className={clsx(cls.link)}
          to={RoutesPaths.task2_javascript}
        >
          Задание 2
        </Link>
        <Link
          className={clsx(cls.link)}
          to={RoutesPaths.task3_api_integration}
        >
          Задание 4
        </Link>
      </div>
    </header>
  );
});
