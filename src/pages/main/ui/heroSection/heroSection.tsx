import { useMemo } from 'react';
import { IHeroImgs, IHeroImgsSrcSet, IHeroImgsSrcs } from '../../../../app/appData/heroSectionImages';
import SlideNextBtn from '../../../../shared/slideNextBtn/slideNextBtn';
import { parseHTML } from '../../../../shared/utils/helpers';
import cl from './heroSection.module.scss';

export interface IHeroSection {
  sectionTitle: string;
  sectionImages: IHeroImgs;
  nextBtnHandler: ()=>void
}
const HeroSection =({sectionTitle, sectionImages, nextBtnHandler}:IHeroSection)=> {
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
          <HeroImg sectionImages={sectionImages}/>
        </div>
      </div>
    </section>
  )
};

const HeroImg =({sectionImages}:{sectionImages:IHeroImgs})=>{
  function renderSrcSet(srcSet:IHeroImgsSrcSet[]){
    //join urls and widths into a single string, each src is separated with a coma
    return srcSet.map(elem=>`${elem.url} ${elem.width}w`).join(', ')
  };
  function renderSizes(sizes: string[]){
    return sizes.join(', ')
  };
  function renderSources(sources?:IHeroImgsSrcs[]){
    if (sources){
      return sources.map(source => {
      return (
        <source
        type={source.type}
        srcSet={renderSrcSet(source.srcset)}
        sizes={renderSizes(sectionImages.default.sizes)}
        />
      )
    })} else return null
  };
  const heroImgData = useMemo(()=>{
    return {
      sources: renderSources(sectionImages.sources),
      sizes: renderSizes(sectionImages.default.sizes),
      srcSet: renderSrcSet(sectionImages.default.srcSet),
    }
  },[sectionImages])

  return (
    <picture>
      {heroImgData.sources && heroImgData.sources}
      <img
        src={sectionImages.default.src}
        srcSet={heroImgData.srcSet}
        sizes={heroImgData.sizes}
        alt={sectionImages.default.alt}
      />
    </picture>
  )
};

export default HeroSection;