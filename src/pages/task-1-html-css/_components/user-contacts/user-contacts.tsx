import React, { memo } from 'react';
import clsx from 'clsx';
import cls from './user-contacts.module.css';
import { Box } from '~/shared/ui/box/box.tsx';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import { MdAttachEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { Link } from '~/shared/ui/link/link.tsx';
import { BsBrowserEdge } from 'react-icons/bs';

interface UserContactsProps {
  className?: string;
  mail?: string;
  phone?: string;
  website?: string;
}

export const UserContacts = memo(
  (props: UserContactsProps) => {
    const { className = '', mail, website, phone } = props;
    return (
      <Box className={clsx(className, cls.container)}>
        <Typography className={cls.title} variant={'h2'}>
          Контакты
        </Typography>
        <Link to={`mailto:${mail}`} className={cls.contact}>
          <MdAttachEmail /> {mail ?? 'Почта не указана'}
        </Link>
        <Link to={`tel:${phone}`} className={cls.contact}>
          <FaPhone />
          {phone ?? 'Телефон не указан'}
        </Link>
        <Link to={website ?? ''} className={cls.contact}>
          <BsBrowserEdge />
          {website ?? 'Сайт не указан'}
        </Link>
      </Box>
    );
  },
);
