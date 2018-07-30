import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Tools',
    group: true,
  },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'nb-shuffle',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Goals',
    icon: 'nb-bar-chart',
    link: '/pages/goals',
  },
  {
    title: 'Profile',
    icon: 'nb-person',
    link: '/pages/profile',
  },
  {
    title: 'Manager',
    icon: 'nb-grid-b-outline',
    link: '/pages/manager',
  },
];
