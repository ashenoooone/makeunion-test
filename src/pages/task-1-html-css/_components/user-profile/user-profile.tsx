import React, { memo } from 'react';
import { UserType } from '~/entities/user';
import cls from './user-profile.module.css';
import { UserProfileHeader } from '../user-profile-header/user-profile-header.tsx';
import { UserBiography } from '../user-biography/user-biography.tsx';
import { UserContacts } from '../user-contacts/user-contacts.tsx';
import { UserAddress } from '~/pages/task-1-html-css/_components/user-address/user-address.tsx';
import { UserCompany } from '~/pages/task-1-html-css/_components/user-company/user-company.tsx';

interface UserProfileProps {
  className?: string;
  user: UserType;
}

export const UserProfile = memo(
  (props: UserProfileProps) => {
    const { className = '', user } = props;
    return (
      <div className={className}>
        <UserProfileHeader user={user} />
        <div className={cls.user_info}>
          <div className={cls.column}>
            <UserContacts
              mail={user.email}
              phone={user.phone}
              website={user.website}
              className={cls.user_contacts}
            />
            <UserAddress
              address={user.address}
              className={cls.user_contacts}
            />
          </div>
          <div className={cls.column}>
            <UserBiography
              className={cls.user_biography}
              userBiography={user.biography}
            />
            <UserCompany company={user.company} />
          </div>
        </div>
      </div>
    );
  },
);
