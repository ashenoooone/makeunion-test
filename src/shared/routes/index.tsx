import React from 'react';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '~/pages/not-found/not-found-page.tsx';
import { MainPage } from '~/pages/main-page/main-page.tsx';

export enum Routes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutesPaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.NOT_FOUND]: '*',
};

export const RoutesConfig: Record<Routes, RouteProps> = {
  [Routes.NOT_FOUND]: {
    path: RoutesPaths.not_found,
    element: <NotFoundPage />,
  },
  [Routes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
};
