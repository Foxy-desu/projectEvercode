import { IHeroImages } from '../../../../app/appData/heroSectionImages';
import SlideNextBtn from '../../../../shared/slideNextBtn/slideNextBtn';
import { parseHTML } from '../../../../shared/utils/helpers';
import cl from './heroSection.module.scss';


export interface IHeroSectionProps {
  sectionTitle: string;
  sectionImages: IHeroImages;
  nextBtnHandler: ()=>void
}
const HeroSection =({sectionTitle, sectionImages, nextBtnHandler}:IHeroSectionProps)=> {
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
          <picture>
            {sectionImages.sources && sectionImages.sources.map(source => {
              return <source type={source.type} srcSet={source.srcset.map(elem=>{
                return `${elem.url} ${elem.width}w`;
              }).join(', ')} sizes={sectionImages.default.sizes.join(', ')}/>
            })}
            <img
              src={sectionImages.default.src}
              srcSet={sectionImages.default.srcSet.map(img=>{
                return `${img.url} ${img.width}w`;
              }).join(', ')}
              sizes={sectionImages.default.sizes.join(', ')}
              alt={sectionImages.default.alt}
              fetchPriority="high"
              />
          </picture>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;