import React, { memo } from 'react';
import { Contacts } from '~/entities/user';
import clsx from 'clsx';
import cls from './user-contacts.module.css';
import { Box } from '~/shared/ui/box/box.tsx';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import { MdAttachEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { Link } from '~/shared/ui/link/link.tsx';

interface UserContactsProps {
  className?: string;
  userContacts?: Contacts;
}

export const UserContacts = memo(
  (props: UserContactsProps) => {
    const { className = '', userContacts } = props;
    return (
      <Box className={clsx(className, cls.container)}>
        <Typography className={cls.title} variant={'h2'}>
          Контакты
        </Typography>
        <Link
          to={`mailto:${userContacts?.email}`}
          className={cls.contact}
          variant={'h3'}
        >
          <MdAttachEmail />{' '}
          {userContacts?.email ?? 'Почта не указана'}
        </Link>
        <Link
          to={`tel:${userContacts?.phone}`}
          className={cls.contact}
          variant={'h3'}
        >
          <FaPhone />
          {userContacts?.phone ?? 'Телефон не указан'}
        </Link>
      </Box>
    );
  },
);
