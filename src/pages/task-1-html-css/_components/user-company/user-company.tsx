import React, { memo } from 'react';
import { Box } from '~/shared/ui/box/box.tsx';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import {
  FaBriefcase,
  FaQuoteRight,
  FaTasks,
} from 'react-icons/fa';
import { Company } from '~/entities/user';
import cls from './user-company.module.css';
import clsx from 'clsx';

interface UserCompanyProps {
  className?: string;
  company?: Company;
}

export const UserCompany = memo(
  (props: UserCompanyProps) => {
    const { className = '', company } = props;
    return (
      <Box className={clsx(className, cls.container)}>
        <Typography variant={'h2'}>Компания</Typography>
        <Typography variant={'h3'}>
          <FaBriefcase className={cls.icon} /> Название:{' '}
          {company?.name}
        </Typography>
        <Typography variant={'h3'}>
          <FaQuoteRight className={cls.icon} /> Слоган:{' '}
          {company?.catchPhrase}
        </Typography>
        <Typography variant={'h3'}>
          <FaTasks className={cls.icon} /> Деятельность:{' '}
          {company?.bs}
        </Typography>
      </Box>
    );
  },
);
