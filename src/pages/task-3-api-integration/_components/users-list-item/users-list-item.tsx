import React, { memo } from 'react';
import cls from './users-list-item.module.css';
import clsx from 'clsx';
import { UserType } from '~/entities/user';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import { Link } from '~/shared/ui/link/link.tsx';

interface UsersListItemProps {
  className?: string;
  user: UserType;
}

export const UsersListItem = memo(
  (props: UsersListItemProps) => {
    const { className = '', user } = props;
    return (
      <div className={clsx(className, cls.users_list_item)}>
        <Link to={`/task3_api_integration/${user.id}`}>
          {' '}
          <Typography variant={'h2'}>
            {user?.name}
          </Typography>
        </Link>
        <div className={cls.description}>
          <Typography variant={'h3'}>
            Email: {user?.email}
          </Typography>
          <Typography variant={'h3'}>
            Компания: {user?.company?.name}
          </Typography>
        </div>
      </div>
    );
  },
);
