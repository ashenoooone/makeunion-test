import React, { useCallback, useState } from 'react';
import { Page } from '~/shared/ui/page/page.tsx';
import { TodoItem } from '~/entities/todo';
import { Todo } from './_components/todo/todo.tsx';

const todos: TodoItem[] = [
  {
    id: 1,
    title: 'Сделать задание 1',
    completed: true,
  },
  {
    id: 2,
    title: 'Сделать задание 2',
    completed: true,
  },
  {
    id: 3,
    title: 'Сделать задание 3',
    completed: true,
  },
  {
    id: 4,
    title: 'Сделать задание 4',
    completed: true,
  },
];

export const Task2Javascript = () => {
  const [todosItems, setTodosItems] = useState(todos);

  const onAddTodo = useCallback((todoName: string) => {
    setTodosItems((todos) => [
      ...todos,
      {
        id: todos.length + 1,
        completed: false,
        title: todoName,
      },
    ]);
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodosItems((todos) =>
      todos.filter((todo) => todo.id !== id),
    );
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodosItems((todos) => [
      ...todos.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            completed: !i.completed,
          };
        }
        return i;
      }),
    ]);
  }, []);

  return (
    <Page>
      <Todo
        onAddTodo={onAddTodo}
        onRemove={onRemove}
        onToggle={onToggle}
        todos={todosItems}
      />
    </Page>
  );
};
