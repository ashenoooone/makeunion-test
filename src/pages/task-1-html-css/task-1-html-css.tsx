import React from 'react';
import { Page } from '~/shared/ui/page/page.tsx';
import { UserProfile } from '~/pages/task-1-html-css/_components/user-profile/user-profile.tsx';
import { UserType } from '~/entities/user';

const user: UserType = {
  id: 1,
  name: 'Иван Иванов',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
  biography:
    'Иван Иванов, родился 15 марта 1985 года в Москве, Россия. С раннего детства проявлял интерес к науке и технологиям, что в дальнейшем определило его профессиональный путь. Обучаясь в школе, Иван участвовал в различных научных конкурсах и олимпиадах, где не раз занимал призовые места. Это стало началом его увлечения физикой и математикой.',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  contacts: {
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
  },
};
export const Task1HtmlCss = () => {
  return (
    <Page>
      <UserProfile user={user} />
    </Page>
  );
};
