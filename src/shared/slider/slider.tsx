import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import RoundBtn from "../roundBtn/roundBtn";
import SliderCard, { ISliderCard } from "../sliderCard/mySlideCard/sliderCard.tsx";
import cl from './slider.module.scss'; 
import { useRef, useState } from "react";

interface ISlider {
  items: Array<ISliderCard>
}

const Slider = ({items}:ISlider)=>{
  const [disableFading, setDisableFading] = useState<'isBeginning'|'isEnd'|null>('isBeginning');
  const navNextRef = useRef(null);
  const navPrevRef = useRef(null);
  return (
    <div className={cl.slider} style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
      <div className={cl.navigation} ref={navPrevRef}>
        <RoundBtn  prompt="" onClick={(e)=>e.preventDefault} style={disableFading==='isBeginning' ? {background:'gray', cursor: 'default'}:{}}/>
      </div>
      <div className={cl.slideContainer}>
        <Swiper
      className={cl.slideContent}
      modules={[Navigation, Pagination, A11y]}
      navigation={{
        nextEl: navNextRef.current,
        prevEl: navPrevRef.current,
      }}
      pagination={{clickable:false}}
      loop={false}
      keyboard={true}
      a11y={{
        scrollOnFocus:true
      }}
      onActiveIndexChange={(e) => {
        if(e.isBeginning){
          setDisableFading("isBeginning");
        } else if(e.isEnd){
          setDisableFading("isEnd");
        } else {
          setDisableFading(null)
        }
       }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: false
        },
        1000: {
          
          slidesPerView: 3,
          spaceBetween: 10,

        }
      }}>
      {items.map((item)=> {
        return (
          <SwiperSlide className={cl.cardWrap} key={item.id}>
            <SliderCard
              id={item.id }
              pageLink={item.pageLink}
              cardTitle={item.cardTitle}
              cardDesc={item.cardDesc}
              images={item.images}
              extraInfo={item.extraInfo}
            />
          </SwiperSlide>
        )
      })}
        </Swiper>
      </div>
      <div className={cl.navigation} style={{transform: 'rotate(180deg)'}} ref={navNextRef}>
        <RoundBtn  prompt="" style={disableFading==='isEnd' ? {background:'gray', cursor: 'default'}:{}}/>
      </div >
    </div>
  )
}

export default Slider;