import React, { memo } from 'react';
import clsx from 'clsx';
import { Box } from '~/shared/ui/box/box.tsx';
import { TodoItemComponent } from '../todo-item/todo-item-component.tsx';
import { TodoItem } from '~/entities/todo';
import cls from './todo-list.module.css';
import { Typography } from '~/shared/ui/typography/typography.tsx';

interface TodoListProps {
  className?: string;
  todoItems?: TodoItem[];
  onRemove?: (id: number) => void;
  onToggle?: (id: number) => void;
}

export const TodoList = memo((props: TodoListProps) => {
  const {
    className = '',
    todoItems,
    onRemove,
    onToggle,
  } = props;
  return (
    <Box className={clsx(className, cls.todo_list)}>
      <Typography variant={'h2'}>Список задач</Typography>
      <div className={cls.todo_items}>
        {todoItems?.map((item) => (
          <TodoItemComponent
            onRemove={onRemove}
            onToggle={onToggle}
            key={item.id}
            todoItem={item}
          />
        ))}
      </div>
    </Box>
  );
});
