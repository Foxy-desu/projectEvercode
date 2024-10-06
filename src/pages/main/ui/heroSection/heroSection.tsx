import SlideNextBtn from '../../../../shared/slideNextBtn/slideNextBtn';
import { parseHTML } from '../../../../shared/utils/helpers';
import cl from './heroSection.module.scss';


export interface IHeroSectionProps {
  sectionTitle: string;
  sectionImages: {big:{url: string, width:number}, small: {url: string, width:number}};
  smallImgMaxVW: number;
  altTitle: string;
  nextBtnHandler: ()=>void
}
const HeroSection =({sectionTitle, sectionImages, smallImgMaxVW, altTitle, nextBtnHandler}:IHeroSectionProps)=> {
  return (
    <section className={cl.heroSection}>
      <div className={cl.content}>
        <h1 className={cl.title}>
          {parseHTML(sectionTitle)}
        </h1>
        <div className={cl.btnWrap}>
          <SlideNextBtn onClick={nextBtnHandler}/>
        </div>
        <div className={cl.imageWrap}>
          <img
          srcSet={`${sectionImages.big.url} ${sectionImages.big.width}w, ${sectionImages.small.url} ${sectionImages.small.width}w`}
          sizes={`(max-width: ${smallImgMaxVW}px) ${sectionImages.small.width}px, ${sectionImages.big.width}px`}
          src={sectionImages.big.url}
          alt={altTitle}
          loading='lazy'/>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;