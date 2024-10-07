import HeroSection  from './heroSection/heroSection';
import cl from './mainPage.module.scss';
import { TRef } from '../../../shared/section/section';
import { useRef } from 'react';
import Section from '../../../shared/section/section';
import { appList } from '../../../app/appData/appList';
import CardWithLogo from '../../../shared/cardWithLogo/cardWithLogo';
import { useViewportWidth } from '../../../shared/utils/hooks/getViewportWidth';
import { useStateOnThreshold } from '../../../shared/utils/hooks/useStateOnThreshold';
import RoundBtn from '../../../shared/roundBtn/roundBtn';
import Slider from '../../../shared/slider/slider';
import { productsList } from '../../../app/appData/productsList';
import { casesList } from '../../../app/appData/casesList';
import { feedbackCards } from '../../../app/appData/feedbackList';
import FeedbackSection from './feedbackSection/feedbackSection';
import { heroImages } from '../../../app/appData/heroSectionImages';
 //TODO: image optimization 
 //TODO improve footer logo display 
 // TODO: fix viewportwidth getting (for different browsers viewports)
 // TODO: improve styling for different viewportwidth
 // TODO: clean styles and code
 //TODO: implement chsnge navlink for text if not active
 //TODO: implement animation for footer accordion 
 //

const MainPage =()=>{
  const threshold = 704;
  const viewportWidth = useViewportWidth();
  const {isThresholdReached:shouldBlockChange, resetThresholdReach} = useStateOnThreshold({value:viewportWidth, compareOperator:'<', threshold, reconcilation: false});
  const scrollTarget = useRef<TRef>(null)
  function slideIntoView(){
    const scrollTargetNode = scrollTarget.current;
    if(scrollTargetNode) {
      scrollTargetNode.scrollIntoView({
        behavior:'smooth',
        block:'start',
      });
    }
  };
  return (
    <>
      <HeroSection
      sectionTitle='<span>Evercode Lab</span> Объединяем бизнес и&nbsp;технологии'
      sectionImages={heroImages}
      nextBtnHandler={slideIntoView}
      />
      <div className={cl.contentWrap}>
        <Section
          ref={scrollTarget}
          sectionTitle='<span>Разрабатываем микросервисы,</span> мобильные и&nbsp;веб-приложения для бизнеса и&nbsp;стартапов'>
          <ul className={cl.appList}>
            {appList.map((item) => {
              const listItemStyle = `${cl.listItem} ${shouldBlockChange? cl.reduced: ''}`
              return (
                <li className={listItemStyle} key={item.name} >
                  <CardWithLogo logo={item.logo} title={item.name} link={item.url}/>
                </li>
              )
            })}
          </ul>
          {shouldBlockChange
            ?(
              <div className={cl.btnWrap}>
                <RoundBtn purpose='expandControl' prompt='Раскрыть список' onClick={resetThresholdReach} />
              </div>
            )
          : ''}
        </Section>
        <Section sectionTitle='Наши продукты'>
          <Slider items={productsList}/>
        </Section>
        <Section sectionTitle='Наша экспертиза'>
          <Slider items={casesList}/>
        </Section>
      </div>
      <div className={cl.feedbacksWrap}>
          <FeedbackSection feedbackCards={feedbackCards}/>
      </div>
    </>
  )
};

export default MainPage;