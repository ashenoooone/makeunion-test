import React, { memo } from 'react';
import { Address } from '~/entities/user';
import { Box } from '~/shared/ui/box/box.tsx';
import clsx from 'clsx';
import cls from './user-address.module.css';
import { Typography } from '~/shared/ui/typography/typography.tsx';
import {
  FaBuilding,
  FaCity,
  FaGlobe,
  FaHome,
  FaMapPin,
} from 'react-icons/fa';

interface UserAddressProps {
  className?: string;
  address?: Address;
}

export const UserAddress = memo(
  (props: UserAddressProps) => {
    const { className = '', address } = props;
    return (
      <Box className={clsx(className, cls.user_address)}>
        <Typography variant={'h2'}>Адрес</Typography>
        <Typography variant={'h3'}>
          <FaHome className={cls.icon} /> Улица:{' '}
          {address?.street}
        </Typography>
        <Typography variant={'h3'}>
          <FaBuilding className={cls.icon} /> Квартира:{' '}
          {address?.suite}
        </Typography>
        <Typography variant={'h3'}>
          <FaCity className={cls.icon} /> Город:{' '}
          {address?.city}
        </Typography>
        <Typography variant={'h3'}>
          <FaMapPin className={cls.icon} /> Почтовый индекс:{' '}
          {address?.zipcode}
        </Typography>
        <Typography variant={'h3'}>
          <FaGlobe className={cls.icon} /> Координаты:{' '}
          {address?.geo.lat}, {address?.geo.lng}
        </Typography>
      </Box>
    );
  },
);
