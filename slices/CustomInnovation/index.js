/* eslint-disable @next/next/no-img-element */
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { useRef } from 'react';

/**
 * @typedef {import("@prismicio/client").Content.CustomInnovationSlice} CustomInnovationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomInnovationSlice>} CustomInnovationProps
 * @param {CustomInnovationProps}
 */
export default function CustomInnovation({slice}) {

  let dummyData = [
    {
      src: '/dummyA.jpg'
    },
    {
      src: '/dummyB.jpg'
    }
  ]

  // data
  let SmallTitle = "Genrobotics, the leading Robotics company in India, primarily focusing on designing and development of Robotic."

  // Swiper custom navigation
  const nextRef = useRef();

  const swipeNext = () => {
    nextRef.current.click();
  }

  const SwiperButtonNext = ({children}) => {
    const swiperHook = useSwiper();
     return (
         <div ref={nextRef} className='swiper-next' style={{display:'none', alignItems:'center', justifyContent:'center'}} onClick={() => swiperHook.slideNext()}>
          <img src='/About/testArrow.svg' alt='arrow-r'/>{children}
        </div>
     )
   };  

   const prevRef = useRef();

   const swipePrev = () => {
      prevRef.current.click();
   }

   const SwiperButtonPrev = ({children}) => {
    const swiperHook = useSwiper();
    return(
      <div ref={prevRef} className='swiper-prev' style={{display:'none', alignItems:'center', justifyContent:'center'}} onClick={() => swiperHook.slidePrev()}>
          <img src='/About/testArrow.svg' alt='arrow-r'/>{children}
      </div>
    )
   }
   

  return(
    <>
    <div className='Innovation'>
        <div className='Innovation_Container'>
          <div className='Innovation_ContentA'>
            <div className='Innovation_ContentA_SmallTitle'>
              <p>
                { SmallTitle }
              </p>
            </div>
            <div className='Innovation_ContentA_MainTitle'> 
              <p>
                Center<br /><span style={{display:'flex', alignItems:'center'}}><img src='/About/Innovation/tinyImg.png' alt='image' />&nbsp;of custom</span>Innovation
              </p>
            </div>
          </div>
          <div className='Innovation_ContentB'>
              <div className='Innovation_ContentB_Container'>
                  {/* swiper */}
                <Swiper className='customLine' style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', padding:'1.3em 0',
                      "--swiper-navigation-size":'2rem'}}
                      spaceBetween={40}
                      speed={1000}
                      modules={[Navigation]}
                      slidesPerView={1}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}>
                      <SwiperButtonNext />
                      <SwiperButtonPrev />
                    {
                      dummyData.map((data, i) => {
                        return(
                          <SwiperSlide style={{display:'flex', alignItems:'center', justifyContent:'center'}}  key={i}>
                              <div className='Innovation_SwiperImgContainer'>
                                <img style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.231em'}} src={data.src} alt='dummy' />
                              </div>
                          </SwiperSlide>
                        )
                      })
                    }
                </Swiper>
                <div className='customSwipNav_Container'>
                  <div className='customNext' onClick={() => {swipePrev()}}>
                    <img style={{height:'60%', width:'60%', objectFit:'contain'}} src='/About/testArrow.svg' alt='arrow-r'/>
                  </div>
                  <div className='customNext' onClick={() => {swipeNext()}}>
                    <img style={{height:'60%', width:'60%', objectFit:'contain', rotate:'180deg'}} src='/About/testArrow.svg' alt='arrow-r'/>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}
