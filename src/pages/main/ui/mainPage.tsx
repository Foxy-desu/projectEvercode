import { SetStateAction, useMemo, useRef} from 'react';
import { TRef } from '../../../shared/section/section';
import { TAppList, TAppListItem, appList} from '../../../app/appData/appList';
import { IFeedbackCard } from '../../../app/appData/feedbackList';
import { IHeroImgs} from '../../../app/appData/heroSectionImages';
import { ISliderCard } from '../../../shared/sliderCard/mySlideCard/sliderCard';
import HeroSection  from './heroSection/heroSection';
import Section from '../../../shared/section/section';
import CardWithLogo from '../../../shared/cardWithLogo/cardWithLogo';
import RoundBtn from '../../../shared/roundBtn/roundBtn';
import Slider from '../../../shared/slider/slider';
import FeedbackSection from './feedbackSection/feedbackSection';
import cl from './mainPage.module.scss';
 // TODO: improve styling for different viewportwidth
 // TODO: clean styles and code 
 // todo: optimize page load
 //TODO: implement chsnge navlink for text if not active
 //TODO: implement animation for footer accordion 
 //

 interface IMainPage {
  isMinimized: SetStateAction<boolean | void>;
  viewportWidth: { width: number, diff: number};
  resetThresholdReached: ()=>void;
  stopReconcilation: ()=>void;
  data: {
    heroImages:IHeroImgs;
    appList: TAppList;
    productsList:ISliderCard[];
    casesList: ISliderCard[];
    feedbackCards: IFeedbackCard[];
  }
 }
const MainPage =({
  isMinimized,
  resetThresholdReached,
  stopReconcilation,
  viewportWidth,
  data
}:IMainPage)=>{
  const scrollTarget = useRef<TRef>(null);
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
        sectionImages={data.heroImages}
        nextBtnHandler={slideIntoView}
      />
      <div className={cl.contentWrap} ref={scrollTarget}>
        <Section
          sectionTitle='<span>Разрабатываем микросервисы,</span> мобильные и&nbsp;веб-приложения для бизнеса и&nbsp;стартапов'>
          <AppsList
            appList={appList}
            isMinimized={isMinimized}
            resetThresholdReached={resetThresholdReached}
            stopReconcilation={stopReconcilation}
            viewportWidth={viewportWidth}/>
        </Section>
        <Section sectionTitle='Наши продукты'>
          <Slider items={data.productsList}/>
        </Section>
        <Section sectionTitle='Наша экспертиза'>
          <Slider items={data.casesList}/>
        </Section>
      </div>
      <div className={cl.feedbacksWrap}>
          <FeedbackSection feedbackCards={data.feedbackCards}/>
      </div>
    </>
  )
};

interface IAppsList {
  appList: TAppList;
  isMinimized: IMainPage['isMinimized'];
  resetThresholdReached: IMainPage['resetThresholdReached'];
  stopReconcilation: IMainPage['stopReconcilation'];
  viewportWidth: IMainPage['viewportWidth'];

}
const AppsList =({appList, isMinimized, resetThresholdReached, stopReconcilation, viewportWidth}:IAppsList)=> {
  const mediaStyle = useMemo(()=>{
    const brPoint1Max = 1234;
    const brPoint1Min = 1010;
    const brPoint2Max = 712;
    const brPoint2Min = 472;
    
    if(viewportWidth.width >= brPoint1Min && viewportWidth.width <= brPoint1Max){
      return `${cl.listItem_reduced}`
    }
    if(viewportWidth.width <= brPoint2Max && viewportWidth.width >= brPoint2Min){
      return `${cl.listItem_reducedMin}`
    }
    return ''
  }, [viewportWidth.width]);
  
  return (
    <>
      <ul className={cl.appList}>
        {appList.map((item:TAppListItem) => {
          const listItemStyle = `${cl.listItem} ${isMinimized? cl.reduced: ''} ${mediaStyle}`
          return (
            <li className={listItemStyle} key={item.name}>
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
    </>
  )
}

export default MainPage;