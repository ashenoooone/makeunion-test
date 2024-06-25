import React from 'react';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '~/pages/not-found/not-found-page.tsx';
import { MainPage } from '~/pages/main-page/main-page.tsx';
import { Task1HtmlCss } from '~/pages/task-1-html-css/task-1-html-css.tsx';
import { Task2Javascript } from '~/pages/task-2-javascript/task-2-javascript.tsx';
import { Task3ApiIntegration } from '~/pages/task-3-api-integration/task-3-api-integration.tsx';

export enum Routes {
  MAIN = 'main',
  TASK_1_HTML_CSS = 'task1_html_css',
  TASK_2_JAVASCRIPT = 'task2_javascript',
  TASK_3_API_INTEGRATION = 'task3_api_integration',
  NOT_FOUND = 'not_found',
}

export const RoutesPaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.TASK_1_HTML_CSS]: '/task1_html_css',
  [Routes.TASK_2_JAVASCRIPT]: '/task2_javascript',
  [Routes.TASK_3_API_INTEGRATION]: '/task3_api_integration',
  [Routes.NOT_FOUND]: '*',
};

export const RoutesConfig: Record<Routes, RouteProps> = {
  [Routes.NOT_FOUND]: {
    path: RoutesPaths.not_found,
    element: <NotFoundPage />,
  },
  [Routes.TASK_1_HTML_CSS]: {
    path: RoutesPaths.task1_html_css,
    element: <Task1HtmlCss />,
  },
  [Routes.TASK_2_JAVASCRIPT]: {
    path: RoutesPaths.task2_javascript,
    element: <Task2Javascript />,
  },
  [Routes.TASK_3_API_INTEGRATION]: {
    path: RoutesPaths.task3_api_integration,
    element: <Task3ApiIntegration />,
  },
  [Routes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
};
