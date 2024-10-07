import { ISliderCardProps } from "../../shared/sliderCard/mySlideCard/sliderCard.tsx";
import medicine from '../assets/img/png/cases/medicine.png';
import education from '../assets/img/png/cases/Education.png';
import crm from '../assets/img/png/cases/CRM.png';
import commerce from '../assets/img/png/cases/E-Commerce.png';
import monitor from '../assets/img/png/cases/Monitoring.png';


export const casesList: ISliderCardProps[] = [
  {
    id: 1,
    pageLink: 'cases/ondoc',
    cardTitle: 'Медицина',
    cardDesc: 'Создаем IT-решения в&nbsp;области медицины, которые повышают эффективность взаимодействия с&nbsp;клиентами.',
    extraInfo: '',
    images: {
      default: medicine,
      alt: 'Evercode lab: IT-решения в области медицины',
    }
  },
  {
    id: 2,
    pageLink: 'cases/ball',
    cardTitle: 'Образование',
    cardDesc: 'Разрабатываем приложения для образования с&nbsp;целью повышения качества учебного процесса.',
    extraInfo: '',
    images: {
      default: education,
      alt: 'Evercode lab: IT-решения в области образования',
    }

  },
  {
    id: 3,
    pageLink: 'cases/cadfem-version-2',
    cardTitle: 'CRM системы',
    cardDesc: 'Разрабатываем и&nbsp;интегрируем системы автоматизации бизнес-процессов, обеспечивая взаимодействие с&nbsp;внешними и&nbsp;внутренними сервисами компании.',
    extraInfo: '',
    images: {
      default: crm,
      alt: 'Evercode lab: IT-решения для автоматизации бизнес-процессов',
    }
  },
  {
    id: 4,
    pageLink: 'cases/foodfox',
    cardTitle: 'Электронная коммерция',
    cardDesc: 'Проектируем и&nbsp;разрабатываем приложения для электронной коммерции.',
    extraInfo: '',
    images: {
      default: commerce,
      alt: 'Evercode lab: IT-решения для электронной коммерции',
    }
  },
  {
    id: 5,
    pageLink: 'cases/escar',
    cardTitle: 'Системы мониторинга',
    cardDesc: 'Разрабатываем системы сбора, обработки и&nbsp;визуализации данных с&nbsp;устройств мониторинга.',
    extraInfo: '',
    images: {
      default: monitor,
      alt: 'Evercode lab: IT-решения для мониторинга данных',
    }
  },
]