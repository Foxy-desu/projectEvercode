import { ISliderCardProps } from "../../shared/sliderCard/uiKitCard/slideCard";
import medic from '../assets/img/svg/Medic.svg';
import market from '../assets/img/svg/Evermarket.svg';
import course from '../assets/img/svg/Course.svg';
import everchain from '../assets/img/svg/Wallet.svg';
import sdk from '../assets/img/svg/SDK.svg';
import evervault from '../assets/img/png/Vault-cropped-optimized.png';

export const productsList: ISliderCardProps[] = [
  {
    id: 1,
    linkType: 'outer',
    pageLink: 'https://эверкодлаб.рф/',
    cardTitle: 'Эверволлет',
    cardDesc: 'White label решение для работы с&nbsp;цифровыми активами.',
    extraInfo: 'Программа внесена в&nbsp;реестр отечественного ПО:<br/>Запись в реестре от 29.12.2022 №16143<br/>Произведена на основании поручения Министерства цифрового развития, связи и&nbsp;массовых коммуникаций Российской Федерации от&nbsp;29.12.2022 по&nbsp;протоколу заседания экспертного совета от&nbsp;23.12.2022 №2134пр',
    
  },
  {
    id: 2,
    linkType: 'inner',
    pageLink: 'products/evercode-online-medic',
    cardTitle: 'Evercode<br/>Online Medic',
    cardDesc: 'Сервис для онлайн-консультаций с&nbsp;врачами',
    extraInfo: '',
    images: {
      default: medic,
      alt: 'Evercode lab: создание платформ для онлайн консультаций с&nbsp;врачами',
      srcSet: [
        { link: medic, descriptor: '' },
        { link: medic, descriptor: '' },
      ]

    }

  },
  {
    id: 3,
    linkType: 'inner',
    pageLink: 'products/evermarket',
    cardTitle: 'Marketplace<br/>Evermarket',
    cardDesc: 'Сервис электронной коммерции',
    extraInfo: '',
    images: {
      default: market,
      alt: 'Evercode lab: создание онлайн маркетплейсов',
      srcSet: [
        { link: market, descriptor: '' },
        { link: market, descriptor: '' },
      ]

    }
  },
  {
    id: 4,
    linkType: 'inner',
    pageLink: 'products/evercourse',
    cardTitle: '<br/>Evercourse',
    cardDesc: 'Платформа для онлайн-обучения',
    extraInfo: '',
    images: {
      default: course,
      alt: 'Evercode lab: создание образовательных платформ',
      srcSet: [
        { link: course, descriptor: '' },
        { link: course, descriptor: '' },
      ]

    }
  },
  {
    id: 5,
    linkType: 'outer',
    pageLink: 'https://wallet.evercodelab.com/',
    cardTitle: 'Everchain<br/>White Label Wallet',
    cardDesc: 'Некастодиальные криптокошельки для токенов',
    extraInfo: '',
    images: {
      default: everchain,
      alt: 'Evercode lab: создание блокчейн-сервисов для цифровых активов',
      srcSet: [
        { link: everchain, descriptor: '' },
        { link: everchain, descriptor: '' },
      ]

    }
  },
  {
    id: 6,
    linkType: 'inner',
    pageLink: '/products/everchain-sdk',
    cardTitle: '<br/>Everchain SDK',
    cardDesc: 'Интеграция монет для некастодиальных кошельков',
    extraInfo: '',
    images: {
      default: sdk,
      alt: 'Evercode lab: разработка API для некастодиальных кошельков',
      srcSet: [
        { link: sdk, descriptor: '' },
        { link: sdk, descriptor: '' },
      ]

    }
  },
  {
    id: 7,
    linkType: 'inner',
    pageLink: '/products/evervault',
    cardTitle: '<br/>Evervault',
    cardDesc: 'Evervault помогает бизнесам безопасно хранить и использовать секретные данные.',
    extraInfo: '',
    images: {
      default: evervault,
      alt: 'Evercode lab: разработка решений для работы с&nbsp;конфиденциальными данными',
      // width: 340,
      // height: 207,
      srcSet: [
        { link: evervault, descriptor: '' },
        { link: evervault, descriptor: '' },
      ]

    }
  }
]