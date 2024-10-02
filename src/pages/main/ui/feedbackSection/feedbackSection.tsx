import cl from './feedbackSection.module.scss';
import { IFeedbackCard} from '../../../../app/appData/feedbackList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { parseHTML } from '../../../../shared/utils/helpers';
import Section from '../../../../shared/section/section';
import RoundBtn from '../../../../shared/roundBtn/roundBtn';
import { useRef } from 'react';

const FeedbackSection =({feedbackCards}:{feedbackCards:IFeedbackCard[]})=>{
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const paginationRef = useRef(null);
  return (
    <Section>
      <header className={cl.header}>
        <h2 className={cl.feedbacksTitle}>Отзывы</h2>
        <div className={cl.decor}></div>
        <div className={cl.controlsWrap}>
          <RoundBtn purpose='slideControl' prompt='предидующий отзыв' ref={navPrevRef}/>
          <div className={cl.paginationWrap} ref={paginationRef}/>
          <RoundBtn purpose='slideControl' prompt='следующий отзыв' style={{transform: 'rotate(180deg)'}} ref={navNextRef}/>
        </div>
      </header>
      <div className={cl.sliderWrap}>
        <Swiper
          className={cl.slider}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: navNextRef.current,
            prevEl: navPrevRef.current
          }}
          pagination={{
            el: paginationRef.current,
            type: 'fraction'
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          grabCursor>
          {feedbackCards.map((item) => {
            return (
              <SwiperSlide key={item.id} style={{height: 'auto'}}>
                <FeedbackCard feedbackItem={item}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Section>
  )
};
const FeedbackCard =({feedbackItem}: {feedbackItem:IFeedbackCard})=>{
  return (
    <div className={cl.feedbackCard}>
      <aside className={cl.details}>
        <DetailsBlock title={feedbackItem.aside.projectInfo.title} description={feedbackItem.aside.projectInfo.description}/>
        <DetailsBlock title={feedbackItem.aside.cooperation.title} description={feedbackItem.aside.cooperation.description}/>
        <DetailsBlock title={feedbackItem.aside.platform.title} description={feedbackItem.aside.platform.description}/>
      </aside>
      <main className={cl.mainContent}>
        <article className={cl.feedback}>
          <blockquote>
            {parseHTML(feedbackItem.main.feedback)}
          </blockquote>
          <cite className={cl.author}>
            <strong className={cl.authorName}>{parseHTML(feedbackItem.main.author.name)}</strong>
            {parseHTML(feedbackItem.main.author.position)}
          </cite>
        </article>
      </main>
    </div>
  )
};
const DetailsBlock =({title, description}:{[key:string]:string})=>{
  return (
    <section className={cl.detailsBlock}>
      <h3 className={cl.detailsTitle}>{parseHTML(title)}</h3>
      <p className={cl.detailsDesc}>{parseHTML(description)}</p>
    </section>
  )
};

export default FeedbackSection;