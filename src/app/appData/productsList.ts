import { ISliderCardProps } from '../../shared/sliderCard/mySlideCard/sliderCard';
import medic from '../assets/img/png/products/Medic.png';
import market from '../assets/img/png/products/Evermarket.png';
import course from '../assets/img/png/products/Course.png';
import everchain from '../assets/img/png/products/Wallet.png';
import sdk from '../assets/img/png/products/SDK.png';
import evervault from '../assets/img/png/products/Vault-cropped-optimized.png';

export const productsList: ISliderCardProps[] = [
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
      default: medic,
      alt: 'Evercode lab: создание платформ для онлайн консультаций с&nbsp;врачами',

    }

  },
  {
    id: 3,
    pageLink: 'products/evermarket',
    cardTitle: 'Marketplace<br/>Evermarket',
    cardDesc: 'Сервис электронной коммерции',
    extraInfo: '',
    images: {
      default: market,
      alt: 'Evercode lab: создание онлайн маркетплейсов',
      
    }
  },
  {
    id: 4,
    pageLink: 'products/evercourse',
    cardTitle: 'Evercourse',
    cardDesc: 'Платформа для онлайн-обучения',
    extraInfo: '',
    images: {
      default: course,
      alt: 'Evercode lab: создание образовательных платформ',
      
    }
  },
  {
    id: 5,
    pageLink: 'https://wallet.evercodelab.com/',
    cardTitle: 'Everchain<br/>White Label Wallet',
    cardDesc: 'Некастодиальные криптокошельки для токенов',
    extraInfo: '',
    images: {
      default: everchain,
      alt: 'Evercode lab: создание блокчейн-сервисов для цифровых активов',
     
    }
  },
  {
    id: 6,
    pageLink: '/products/everchain-sdk',
    cardTitle: 'Everchain SDK',
    cardDesc: 'Интеграция монет для некастодиальных кошельков',
    extraInfo: '',
    images: {
      default: sdk,
      alt: 'Evercode lab: разработка API для некастодиальных кошельков',
     
    }
  },
  {
    id: 7,
    pageLink: '/products/evervault',
    cardTitle: 'Evervault',
    cardDesc: 'Evervault помогает бизнесам безопасно хранить и использовать секретные данные.',
    extraInfo: '',
    images: {
      default: evervault,
      alt: 'Evercode lab: разработка решений для работы с&nbsp;конфиденциальными данными',
    
    }
  }
]