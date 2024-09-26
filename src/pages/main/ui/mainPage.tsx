import HeroSection, { IHeroSectionProps } from './heroSection/heroSection';
import heroLg from '../../../app/assets//img/png/Main.png';
import heroSm from '../../../app/assets/img/png/Main (395).png';
import cl from './mainPage.module.scss';
import { TRef } from '../../../shared/section/section';
import { useRef } from 'react';
import Section from '../../../shared/section/section';

const MainPage =()=>{
  const scrollTarget = useRef<TRef>(null)
  const heroImages:IHeroSectionProps['sectionImages'] = {
    big: {
      url: heroLg,
      width: 788,
    },
    small: {
      url: heroSm,
      width: 395,
    },
  };

  function slideIntoView(){
    const scrollTargetNode = scrollTarget.current;
    if(scrollTargetNode) {
      scrollTargetNode.scrollIntoView({
        behavior:'smooth',
        block:'start',
      });
    }
  }
  return (
    <>
    <HeroSection
    sectionTitle='<span>Evercode Lab</span> Объединяем бизнес и&nbsp;технологии'
    sectionImages={heroImages}
    smallImgMaxVW={500}
    nextBtnHandler={slideIntoView}
    altTitle=''/>
    <div className={cl.contentWrap}>
      <Section
        ref={scrollTarget}
        sectionTitle='<span>Разрабатываем микросервисы,</span> мобильные и&nbsp;веб-приложения для бизнеса и&nbsp;стартапов'>
        <p>oh blyat'</p>
      </Section>
    </div>
    </>
  )
};

export default MainPage;