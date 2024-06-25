import React, { useEffect, useState } from 'react';
import { Page } from '~/shared/ui/page/page.tsx';
import { UserType } from '~/entities/user';
import { fetchUsers } from './_api/fetch-users.ts';
import { UsersList } from './_components/users-list/users-list.tsx';
import { Loader } from '~/shared/ui/loader/loader.tsx';

export const Task3ApiIntegration = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((res) => {
      setUsers(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <Page centerContent>
      {!isLoading ? (
        <UsersList users={users} />
      ) : (
        <Loader centered />
      )}
    </Page>
  );
};
