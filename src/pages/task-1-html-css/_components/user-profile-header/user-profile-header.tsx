import React, { memo } from 'react';
import cls from './user-profile-header.module.css';
import { Box } from '~/shared/ui/box/box.tsx';
import { Avatar } from '~/shared/ui/avatar/avatar.tsx';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import { UserType } from '~/entities/user';
import clsx from 'clsx';

interface UserProfileHeaderProps {
  className?: string;
  user: UserType;
}

export const UserProfileHeader = memo(
  (props: UserProfileHeaderProps) => {
    const { className = '', user } = props;
    return (
      <Box
        className={clsx(cls.user_profile_box, className)}
      >
        <Box className={cls.avatar_box}>
          <Avatar
            src={user.avatar}
            size={100}
            fallback={user.name.slice(0, 2)}
            className={cls.avatar}
          />
          <Typography
            variant={'h1'}
            affects={'large'}
            className={cls.name}
          >
            {user?.name}
          </Typography>
        </Box>
      </Box>
    );
  },
);
