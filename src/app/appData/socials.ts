import iconSprite from '../assets/img/svg/svgSprite.svg';

interface ISocialsItem {
  id: number;
  name: string;
  url: string;
  icon: string;
  text: string;
}
export const socialsList: ISocialsItem[] = [
  {
    id: 1,
    name: 'medium',
    url: 'https://medium.com/evercodelab',
    icon: `${iconSprite}#medium`,
    text: 'Наша страница на Medium'
  },
  {
    id: 2,
    name: 'github',
    url: 'https://github.com/evercodelab',
    icon: `${iconSprite}#git`,
    text: 'Наша страница в GitHub'
  },
  {
    id: 3,
    name: 'twitter',
    url: 'https://twitter.com/evercodelab',
    icon: `${iconSprite}#tweeter`,
    text: 'Наша страница в Twitter'
  },
  {
    id: 4,
    name: 'facebook',
    url: 'https://www.facebook.com/evercodelab',
    icon: `${iconSprite}#facebook`,
    text: 'Наша страница на Facebook'
  },
  {
    id: 5,
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/evercode-lab/',
    icon: `${iconSprite}#linkedin`,
    text: 'Наша страница на LinkedIn'
  },
]