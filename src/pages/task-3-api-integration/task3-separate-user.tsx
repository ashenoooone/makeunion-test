import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '~/shared/ui/page/page.tsx';
import { UserType } from '~/entities/user';
import { fetchUser } from '~/pages/task-3-api-integration/_api/fetch-users.ts';
import { UserProfile } from '~/pages/task-1-html-css/_components/user-profile/user-profile.tsx';
import { Loader } from '~/shared/ui/loader/loader.tsx';

export const Task3SeparateUser = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserType | null>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (id !== undefined) {
      fetchUser({ id: +id }).then((res) => {
        setUser(res);
        setIsLoading(false);
      });
    }
  }, [id]);
  return (
    <Page>
      {user && !isLoading ? (
        <UserProfile user={user} />
      ) : (
        <Loader centered />
      )}
    </Page>
  );
};
