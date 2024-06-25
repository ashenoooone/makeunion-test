import React, {
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Box } from '~/shared/ui/box/box';
import clsx from 'clsx';
import cls from './create-todo.module.css';
import { Typography } from '~/shared/ui/typography/typography';
import { Input } from '~/shared/ui/input/input';
import { Button } from '~/shared/ui/button/button';

interface CreateTodoProps {
  className?: string;
  onAddNewTodo?: (name: string) => void;
}

export const CreateTodo = memo((props: CreateTodoProps) => {
  const { className = '', onAddNewTodo } = props;

  const [newTodoName, setNewTodoName] =
    useState<string>('');
  const [error, setError] = useState<null | string>(null);

  const onChangeCreateTodoInput = useCallback(
    (value: string) => {
      setNewTodoName(value);
    },
    [],
  );

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (newTodoName.trim().length === 0) {
      setError('Поле не может быть пустым');
    } else {
      setError(null);
      onAddNewTodo?.(newTodoName);
    }
  };

  return (
    <Box className={clsx(className, cls.create_todo)}>
      <Typography variant={'h2'}>Создать todo</Typography>
      <form
        onSubmit={onSubmit}
        className={cls.create_todo_container}
      >
        <Input
          placeholder="Название задания"
          required
          className={cls.input}
          value={newTodoName}
          onChange={onChangeCreateTodoInput}
        />
        <Button variant="primary">Создать</Button>
      </form>
      {error && (
        <Typography variant="h3" affects="error">
          {error}
        </Typography>
      )}
    </Box>
  );
});
