import React, { memo } from 'react';
import { Box } from '~/shared/ui/box/box.tsx';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import clsx from 'clsx';
import cls from './user-biography.module.css';

interface UserBiographyProps {
  className?: string;
  userBiography?: string;
}

export const UserBiography = memo(
  (props: UserBiographyProps) => {
    const { className = '', userBiography } = props;
    return (
      <Box className={clsx(className, cls.container)}>
        <Typography variant={'h2'}>Биография</Typography>
        <Typography variant={'h3'}>
          {userBiography ?? '🕵️ Пока пусто'}
        </Typography>
      </Box>
    );
  },
);
