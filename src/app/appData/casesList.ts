import medicinePng from '../assets/img/cases/png/medicine.png';
import medicineAvif from '../assets/img/cases/avif/medicine.avif';
import medicineWebp from '../assets/img/cases/webp/medicine.webp';
import educationPng from '../assets/img/cases/png/Education.png';
import educationAvif from '../assets/img/cases/avif/Education.avif';
import educationWebp from '../assets/img/cases/webp/Education.webp';
import crmPng from '../assets/img/cases/png/CRM.png';
import crmAvif from '../assets/img/cases/avif/CRM.avif';
import crmWebp from '../assets/img/cases/webp/CRM.webp';
import commercePng from '../assets/img/cases/png/E-Commerce.png';
import commerceAvif from '../assets/img/cases/avif/E-Commerce.avif';
import commerceWebp from '../assets/img/cases/webp/E-Commerce.webp';
import monitorPng from '../assets/img/cases/png/Monitoring.png';
import monitorAvif from '../assets/img/cases/avif/Monitoring.avif';
import monitorWebp from '../assets/img/cases/webp/Monitoring.webp';

export interface ISliderCardImages {
  default: {
    src: string;
    alt: string;
  };
  sources?: {
    type: string;
    src: string;
  }[];
}

interface ISliderCard {
  id: number;
  pageLink: string;
  cardTitle: string;
  cardDesc: string;
  extraInfo?: string;
  images: ISliderCardImages;
}
export const casesList: ISliderCard[] = [
  {
    id: 1,
    pageLink: 'cases/ondoc',
    cardTitle: 'Медицина',
    cardDesc:
      'Создаем IT-решения в&nbsp;области медицины, которые повышают эффективность взаимодействия с&nbsp;клиентами.',
    extraInfo: '',
    images: {
      default: { src: medicinePng, alt: 'Evercode lab: IT-решения в области медицины' },
      sources: [
        { type: 'image/avif', src: medicineAvif },
        { type: 'image/webp', src: medicineWebp },
      ],
    },
  },
  {
    id: 2,
    pageLink: 'cases/ball',
    cardTitle: 'Образование',
    cardDesc: 'Разрабатываем приложения для образования с&nbsp;целью повышения качества учебного процесса.',
    extraInfo: '',
    images: {
      default: { src: educationPng, alt: 'Evercode lab: IT-решения в области образования' },
      sources: [
        { type: 'image/avif', src: educationAvif },
        { type: 'image/webp', src: educationWebp },
      ],
    },
  },
  {
    id: 3,
    pageLink: 'cases/cadfem-version-2',
    cardTitle: 'CRM системы',
    cardDesc:
      'Разрабатываем и&nbsp;интегрируем системы автоматизации бизнес-процессов, обеспечивая взаимодействие с&nbsp;внешними и&nbsp;внутренними сервисами компании.',
    extraInfo: '',
    images: {
      default: { src: crmPng, alt: 'Evercode lab: IT-решения для автоматизации бизнес-процессов' },
      sources: [
        { type: 'image/avif', src: crmAvif },
        { type: 'image/webp', src: crmWebp },
      ],
    },
  },
  {
    id: 4,
    pageLink: 'cases/foodfox',
    cardTitle: 'Электронная коммерция',
    cardDesc: 'Проектируем и&nbsp;разрабатываем приложения для электронной коммерции.',
    extraInfo: '',
    images: {
      default: { src: commercePng, alt: 'Evercode lab: IT-решения для электронной коммерции' },
      sources: [
        { type: 'image/avif', src: commerceAvif },
        { type: 'image/webp', src: commerceWebp },
      ],
    },
  },
  {
    id: 5,
    pageLink: 'cases/escar',
    cardTitle: 'Системы мониторинга',
    cardDesc: 'Разрабатываем системы сбора, обработки и&nbsp;визуализации данных с&nbsp;устройств мониторинга.',
    extraInfo: '',
    images: {
      default: { src: monitorPng, alt: 'Evercode lab: IT-решения для мониторинга данных' },
      sources: [
        { type: 'image/avif', src: monitorAvif },
        { type: 'image/webp', src: monitorWebp },
      ],
    },
  },
];
