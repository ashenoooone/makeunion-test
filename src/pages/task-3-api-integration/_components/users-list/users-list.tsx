import React, { memo } from 'react';
import { UserType } from '~/entities/user';
import { Box } from '~/shared/ui/box/box.tsx';
import clsx from 'clsx';
import cls from './users-list.module.css';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import { UsersListItem } from '../users-list-item/users-list-item.tsx';

interface UsersListProps {
  className?: string;
  users?: UserType[];
}

export const UsersList = memo((props: UsersListProps) => {
  const { className = '', users } = props;
  return (
    <Box className={clsx(className, cls.container)}>
      <Typography className={cls.title} variant={'h2'}>
        Список пользователей
      </Typography>
      <div className={cls.users_list}>
        {users && users?.length > 0 ? (
          users?.map((u) => (
            <UsersListItem user={u} key={u.id} />
          ))
        ) : (
          <Typography variant={'h3'}>Пусто</Typography>
        )}
      </div>
    </Box>
  );
});
