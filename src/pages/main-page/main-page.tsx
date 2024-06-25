import React from 'react';
import { Page } from '~/shared/ui/page/page.tsx';
import cls from './main-page.module.css';
import { Link } from '~/shared/ui/link/link.tsx';

const tasks = [
  {
    id: 1,
    title: 'HTML и CSS',
    description:
      'Создание страницы профиля пользователя с использованием HTML и CSS.',
    githubLink:
      'https://github.com/ashenoooone/makeunion-test/tree/main/src/pages/task-1-html-css',
    viewLink: '/task1_html_css',
  },
  {
    id: 2,
    title: 'JavaScript',
    description:
      'Разработка интерактивного веб-приложения To-Do List.',
    githubLink:
      'https://github.com/ashenoooone/makeunion-test/tree/main/src/pages/task-2-javascript',
    viewLink: '/task2_javascript',
  },
  {
    id: 3,
    title: 'Интеграция с бекендом',
    description:
      'Интеграция с публичным API для отображения списка пользователей.',
    githubLink:
      'https://github.com/yourusername/project/tree/main/task4_api_integration',
    viewLink: '/task3_api_integration',
  },
];
export const MainPage = () => {
  return (
    <Page>
      <div className={cls.main_page}>
        <h1>Задания</h1>
        <ul className={cls.task_links}>
          {tasks.map((task) => (
            <li key={task.id} className={cls.task_item}>
              <h2 className={cls.title}>{task.title}</h2>
              <p className={cls.description}>
                {task.description}
              </p>
              <div className={cls.task_links}>
                <Link
                  to={task.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Code
                </Link>
                <Link to={task.viewLink}>Реализация</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};
