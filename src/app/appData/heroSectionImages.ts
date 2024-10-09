import heroLgPng from '../assets/img/main/png/Main.png';
import heroSmPng from '../assets/img/main/png/Main (395).png';
import heroLgAvif from '../assets/img/main/avif/Main.avif';
import heroSmAvif from '../assets/img/main/avif/Main (395).avif';
import heroLgWebp from '../assets/img/main/webp/Main.webp';
import heroSmWebp from '../assets/img/main/webp/Main (395).webp';

export interface IHeroImgsSrcSet {
  url: string;
  width: number;
}
export interface IHeroImgsDef {
  src: string;
  srcSet: IHeroImgsSrcSet[];
  sizes: string[];
  alt: string;
}
export interface IHeroImgsSrcs {
  type: string,
  srcset: IHeroImgsSrcSet[];
}
export interface IHeroImgs {
  default: IHeroImgsDef,
  sources?: IHeroImgsSrcs[]
}
export const heroImages:IHeroImgs = {
  default: {
    src: heroLgPng,
    srcSet: [
      {url: heroSmPng, width: 395},
      {url: heroLgPng, width: 788},
    ],
    sizes: [
      '(max-width: 500px) 395px',
      '788px',
    ],
    alt: '',
  },

  sources: [
    {
      type: 'image/avif',
      srcset: [
        {url: heroSmAvif, width: 395},
        {url: heroLgAvif, width: 788},
      ]
    },
    {
      type: 'image/webp',
      srcset: [
        {url: heroSmWebp, width: 395},
        {url: heroLgWebp, width: 788},
      ]
    }
  ]
};