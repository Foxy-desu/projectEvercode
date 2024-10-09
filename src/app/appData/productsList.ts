import { ISliderCard} from '../../shared/sliderCard/mySlideCard/sliderCard';
import medicPng from '../assets/img/products/png/Medic.png';
import medicAvif from '../assets/img/products/avif/Medic.avif';
import medicWebp from '../assets/img/products/webp/Medic.webp';
import marketPng from '../assets/img/products/png/Evermarket.png';
import marketAvif from '../assets/img/products/avif/Evermarket.avif';
import marketWebp from '../assets/img/products/webp/Evermarket.webp';
import coursePng from '../assets/img/products/png/Course.png';
import courseAvif from '../assets/img/products/avif/Course.avif';
import courseWebp from '../assets/img/products/webp/Course.webp';
import everchainPng from '../assets/img/products/png/Wallet.png';
import everchainAvif from '../assets/img/products/avif/Wallet.avif';
import everchainWebp from '../assets/img/products/webp/Wallet.webp';
import sdkPng from '../assets/img/products/png/SDK.png';
import sdkAvif from '../assets/img/products/avif/SDK.avif';
import sdkWebp from '../assets/img/products/webp/SDK.webp';
import evervaultPng from '../assets/img/products/png/Vault-cropped-optimized.png';
import evervaultAvif from '../assets/img/products/avif/Vault-cropped-optimized.avif';
import evervaultWebp from '../assets/img/products/webp/Vault-cropped-optimized.webp';

export const productsList: ISliderCard[] = [
  {
    id: 1,
    pageLink: 'https://эверкодлаб.рф/',
    cardTitle: 'Эверволлет',
    cardDesc: 'White label решение для работы с&nbsp;цифровыми активами.',
    extraInfo: 'Программа внесена в&nbsp;реестр отечественного ПО:<br/>Запись в реестре от 29.12.2022 №16143<br/>Произведена на основании поручения Министерства цифрового развития, связи и&nbsp;массовых коммуникаций Российской Федерации от&nbsp;29.12.2022 по&nbsp;протоколу заседания экспертного совета от&nbsp;23.12.2022 №2134пр',
    
  },
  {
    id: 2,
    pageLink: 'products/evercode-online-medic',
    cardTitle: 'Evercode<br/>Online Medic',
    cardDesc: 'Сервис для онлайн-консультаций с&nbsp;врачами',
    extraInfo: '',
    images: {
      default: {src: medicPng, alt: 'Evercode lab: создание платформ для онлайн консультаций с врачами'},
      sources: [
        {type: 'image/avif', src: medicAvif},
        {type: 'image/webp', src: medicWebp},
      ]
    }
  },
  {
    id: 3,
    pageLink: 'products/evermarket',
    cardTitle: 'Marketplace<br/>Evermarket',
    cardDesc: 'Сервис электронной коммерции',
    extraInfo: '',
    images: {
      default: {src: marketPng, alt: 'Evercode lab: создание онлайн маркетплейсов'},
      sources: [
        {type: 'image/avif', src: marketAvif},
        {type: 'image/webp', src: marketWebp},
      ]
      
    }
  },
  {
    id: 4,
    pageLink: 'products/evercourse',
    cardTitle: 'Evercourse',
    cardDesc: 'Платформа для онлайн-обучения',
    extraInfo: '',
    images: {
      default: {src: coursePng, alt: 'Evercode lab: создание образовательных платформ'},
      sources: [
        {type: 'image/avif', src: courseAvif},
        {type: 'image/webp', src: courseWebp},
      ]
      
    }
  },
  {
    id: 5,
    pageLink: 'https://wallet.evercodelab.com/',
    cardTitle: 'Everchain<br/>White Label Wallet',
    cardDesc: 'Некастодиальные криптокошельки для токенов',
    extraInfo: '',
    images: {
      default: {src: everchainPng, alt: 'Evercode lab: создание блокчейн-сервисов для цифровых активов'},
      sources: [
        {type: 'image/avif', src: everchainAvif},
        {type: 'image/webp', src: everchainWebp},
      ]
     
    }
  },
  {
    id: 6,
    pageLink: '/products/everchain-sdk',
    cardTitle: 'Everchain SDK',
    cardDesc: 'Интеграция монет для некастодиальных кошельков',
    extraInfo: '',
    images: {
      default: {src: sdkPng, alt: 'Evercode lab: разработка API для некастодиальных кошельков'},
      sources: [
        {type: 'image/avif', src: sdkAvif},
        {type: 'image/webp', src: sdkWebp},
      ]
     
    }
  },
  {
    id: 7,
    pageLink: '/products/evervault',
    cardTitle: 'Evervault',
    cardDesc: 'Evervault помогает бизнесам безопасно хранить и использовать секретные данные.',
    extraInfo: '',
    images: {
      default: {src: evervaultPng, alt: 'Evercode lab: разработка решений для работы с&nbsp;конфиденциальными данными'},
      sources: [
        {type: 'image/avif', src: evervaultAvif},
        {type: 'image/webp', src: evervaultWebp},
      ]
    }
  }
]