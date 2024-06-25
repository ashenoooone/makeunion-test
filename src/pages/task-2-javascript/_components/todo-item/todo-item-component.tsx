import React, { memo, useCallback } from 'react';
import { TodoItem } from '~/entities/todo';
import clsx from 'clsx';
import cls from './todo-item-component.module.css';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import { Button } from '~/shared/ui/button/button.tsx';
import { MdDeleteForever } from 'react-icons/md';

interface TodoItemComponentProps {
  className?: string;
  todoItem: TodoItem;
  onRemove?: (id: number) => void;
  onToggle?: (id: number) => void;
}

export const TodoItemComponent = memo(
  (props: TodoItemComponentProps) => {
    const {
      className = '',
      todoItem,
      onToggle,
      onRemove,
    } = props;

    const onRemoveClickHandler = useCallback(() => {
      onRemove?.(todoItem.id);
    }, [onRemove, todoItem.id]);

    const onToggleClickHandler = useCallback(() => {
      onToggle?.(todoItem.id);
    }, [onToggle, todoItem.id]);

    return (
      <div className={clsx(cls.todo_item, className)}>
        <Button
          onClick={onToggleClickHandler}
          className={cls.todo_item_start}
        >
          <input
            checked={todoItem.completed}
            type="checkbox"
          />
          <Typography
            variant={'h3'}
            className={clsx(cls.title, {
              [cls.title_checked]: todoItem.completed,
            })}
          >
            {todoItem.title}
          </Typography>
        </Button>
        <div>
          <Button
            onClick={onRemoveClickHandler}
            type="button"
            title={'удалить'}
          >
            <MdDeleteForever
              className={clsx(
                cls.button_icon,
                cls.remove_button,
              )}
            />
          </Button>
        </div>
      </div>
    );
  },
);
