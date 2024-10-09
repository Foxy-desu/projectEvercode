import { INavProps } from '../../shared/navigationMenu/navigationMenu';

export const navMenuLinks: INavProps['links'] = [
  {
    to: 'products',
    text: 'Продукты',
    type: 'dropdown',
    inner: [
      { to: 'products/white-label', text: 'Everchain White Label Wallet' },
      { to: 'products/evervault', text: 'Evervault' },
      { to: 'products/everCourse', text: 'EverCourse' },
      { to: 'products/evercode-online-medic', text: 'Evercode Online Medic' },
      { to: 'products/evermarket', text: 'Marketplace Evermarket' },
      { to: 'products/everchain-sdk', text: 'Everchain SDK' },
    ],
  },
  {
    to: 'cases',
    text: 'Кейсы',
    type: 'dropdown',
    inner: [
      { to: 'cases/cadfem-version-2', text: 'CRM решения' },
      { to: 'cases/escar', text: 'Системы мониторинга' },
      { to: 'cases/foodfox', text: 'Электронная коммерция' },
      { to: 'cases/ondoc/', text: 'Медицина' },
      { to: 'ccases/ball', text: 'Образование' },
    ],
  },
  { to: 'carreer', text: 'Карьера', type: 'simple' },
  { to: 'blog', text: 'Блог', type: 'icon' },
  { to: 'contacts', text: 'Контакты', type: 'simple' },
];
