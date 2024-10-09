import { Link } from 'react-router-dom';
import cl from './sliderCard.module.scss';
import { parseHTML } from '../../utils/helpers';
import { ISliderCardImages } from '../../../app/appData/casesList';

export interface ISliderCard {
  id: number;
  pageLink: string;
  cardTitle: string;
  cardDesc: string;
  extraInfo?: string;
  images?: ISliderCardImages;
}

const SliderCard = ({ pageLink, images, cardTitle, cardDesc, extraInfo }: ISliderCard) => {
  return (
    <Link className={cl.card} to={pageLink}>
      {images ? (
        <picture className={cl.imageWrap}>
          {images.sources &&
            images.sources.map((source) => {
              return <source type={source.type} srcSet={source.src} />;
            })}
          <img
            className={cl.cardImg}
            src={images.default.src}
            alt={images.default.alt}
            loading="lazy"
            decoding="async"
          />
        </picture>
      ) : (
        false
      )}
      <div className={cl.cardContent}>
        <h3 className={cl.title}>{parseHTML(cardTitle)}</h3>
        <p className={cl.desc}>{parseHTML(cardDesc)}</p>
        {extraInfo && <p className={cl.extra}>{parseHTML(extraInfo)}</p>}
      </div>
    </Link>
  );
};

export default SliderCard;
