import React, { memo } from 'react';
import { TodoItem } from '~/entities/todo';
import { TodoList } from '../todo-list/todo-list.tsx';
import { CreateTodo } from '../create-todo/create-todo';
import clsx from 'clsx';
import cls from './todo.module.css';

interface TodoProps {
  className?: string;
  todos?: TodoItem[];
  onAddTodo?: (todoName: string) => void;
  onRemove?: (id: number) => void;
  onToggle?: (id: number) => void;
}

export const Todo = memo((props: TodoProps) => {
  const {
    className = '',
    todos,
    onAddTodo,
    onRemove,
    onToggle,
  } = props;
  return (
    <div className={clsx(className, cls.todo)}>
      <CreateTodo onAddNewTodo={onAddTodo} />
      <TodoList
        onRemove={onRemove}
        onToggle={onToggle}
        todoItems={todos}
      />
    </div>
  );
});
