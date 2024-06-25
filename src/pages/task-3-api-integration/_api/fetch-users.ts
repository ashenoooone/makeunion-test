import { UserType } from '~/entities/user';

export function fetchUsers(): Promise<UserType[]> {
  return fetch(
    'https://jsonplaceholder.typicode.com/users',
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<UserType[]>;
  });
}

export function fetchUser({
  id,
}: {
  id: number;
}): Promise<UserType> {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<UserType>;
  });
}
