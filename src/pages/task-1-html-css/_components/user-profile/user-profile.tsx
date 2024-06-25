import React, { memo } from 'react';
import { UserType } from '~/entities/user';
import cls from './user-profile.module.css';
import { UserProfileHeader } from '../user-profile-header/user-profile-header.tsx';
import { UserBiography } from '../user-biography/user-biography.tsx';
import { UserContacts } from '../user-contacts/user-contacts.tsx';

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
          <UserContacts
            className={cls.user_contacts}
            userContacts={user.contacts}
          />
          <UserBiography
            className={cls.user_biography}
            userBiography={user.biography}
          />
        </div>
      </div>
    );
  },
);
