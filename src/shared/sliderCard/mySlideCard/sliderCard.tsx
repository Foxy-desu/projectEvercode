import { Link } from 'react-router-dom';
import cl from './sliderCard.module.scss';
import { parseHTML } from '../../utils/helpers';

export interface ISliderCardProps {
  id:number;
  pageLink: string;
  cardTitle: string;
  cardDesc: string;
  extraInfo?:string;
  images?: {
    default: string;
    alt: string;
    width?: number;
    height?: number;
    srcSet: Array<{
      link: string;
      descriptor: string;
    }>
  }
}

const SliderCard =({pageLink,images, cardTitle, cardDesc,extraInfo}:ISliderCardProps)=> {
  return (
    <Link className={cl.card} to={pageLink}>
        {images
          ? (<div className={cl.imageWrap}>
              <img className={cl.cardImg}
                srcSet={images.srcSet.map(({link, descriptor})=>link+' '+descriptor).join(', ')}
                src={images.default}
                alt={images.alt}/>
              </div>
            )
          : false
        }
      <div className={cl.cardContent}>
        <h3 className={cl.title}>{parseHTML(cardTitle)}</h3>
        <p className={cl.desc}>{parseHTML(cardDesc)}</p>
        {extraInfo && <p className={cl.extra}>{parseHTML(extraInfo)}</p>}
      </div>
    </Link>
  )
};

export default SliderCard;