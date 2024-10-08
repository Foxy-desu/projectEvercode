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
  const {isThresholdReached:isMinimized, resetThresholdReached, stopReconcilation} = useStateOnThreshold({value:viewportWidth.width, compareOperator:'<', threshold});
  const scrollTarget = useRef<TRef>(null);
  const diffVariableCss = {'--diff': viewportWidth.diff} as React.CSSProperties;
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
              const listItemStyle = `${cl.listItem} ${isMinimized? cl.reduced: ''}`
              return (
                <li className={listItemStyle} key={item.name} style={diffVariableCss}>
                  <CardWithLogo logo={item.logo} title={item.name} link={item.url}/>
                </li>
              )
            })}
          </ul>
          {isMinimized
            ?(
              <div className={cl.btnWrap}>
                <RoundBtn purpose='expandControl' prompt='Раскрыть список' onClick={()=>{
                  resetThresholdReached()
                  stopReconcilation()}
                } />
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