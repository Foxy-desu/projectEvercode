enum Options {
  NAME = 'name',
  LOGO = 'logo',
  URL = 'url',
}
export type TAppListItem = {
  [key in Options]: string;
};
export type TAppList = TAppListItem[];

export const appList: TAppList = [
  { name: 'Cadfem', logo: 'cadfem', url: 'https://www.cadfem-cis.ru/' },
  { name: 'Foodfox<br/>(now Yandex.Eats)', logo: 'foodfox', url: 'https://evercodelab.com/ru/cases/foodfox/' },
  { name: 'TDCloud', logo: 'td-cloud', url: 'https://tdcloud.ru/' },
  { name: 'Reksoft', logo: 'reksoft', url: 'https://www.reksoft.ru/' },
  { name: 'Guarda Wallet', logo: 'guarda', url: 'https://guarda.com/' },
  { name: 'Hellan', logo: 'gelan', url: 'https://evercodelab.com/ru/cases/escar/' },
  { name: 'Frost Wallet', logo: 'frostwallet', url: 'https://frostwallet.cc/' },
  { name: 'Ondock', logo: 'ondoc', url: 'https://ondoc.me/' },
  { name: 'Kelnik', logo: 'kelnik', url: 'https://www.kelnik.ru/' },
  { name: 'Cherry Swap', logo: 'cherry', url: 'https://www.cherryswap.io/home/' },
];
