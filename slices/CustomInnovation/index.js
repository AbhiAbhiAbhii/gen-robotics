/* eslint-disable @next/next/no-img-element */
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { useEffect, useRef, useState } from 'react';

/**
 * @typedef {import("@prismicio/client").Content.CustomInnovationSlice} CustomInnovationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomInnovationSlice>} CustomInnovationProps
 * @param {CustomInnovationProps}
 */
export default function CustomInnovation({slice}) {


  const [ swipe, setSwipe ] = useState(0)


  let dummyData = [
    {
      src: '/About/Innovation/Accounts/Accounts.webp'
    },
    {
      src: '/About/Innovation/Business/business.webp'
    },
    {
      src:'/About/Innovation/HR/hr.webp'
    },
    {
      src:'/About/Innovation/Marketing/marketing.webp'
    },
    {
      src:'/About/Innovation/Production/production.webp'
    },
    {
      src:'/About/Innovation/R _ D/r&d.webp'
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

   // Animation

   // Transition
   let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
   let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

   let hide = 'translateY(100%)';
   let reveal = 'translateY(0%)';

   useEffect(() => {

    let mainTitle = document.querySelector('.Innovation_ContentA_MainTitle');
    let smallTitle = document.querySelector('.Innovation_ContentA_SmallTitle');
    
    let innovAsset = document.querySelector('.Innovation_Asset');

    const observe = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          smallTitle.style.opacity = '1';
          innovAsset.style.transform = reveal;
          setTimeout(() => {
            mainTitle.style.opacity = '1'
          }, 1000)
        }
      })
    }, {threshold: 0.5})
    observe.observe(document.querySelector('.Innovation'));

   }, [])

  


   

  return(
    <>
    <div className='Innovation'>
        <div className='Innovation_Container'>
          <div className='Innovation_ContentA'>
            <div className='Innovation_ContentA_SmallTitle' style={{opacity: '0', transition: `all 1s ${quart}`}}>
              <p>
                { SmallTitle }
              </p>
            </div>
            <div className='Innovation_ContentA_MainTitle' style={{opacity: '0', transition: `all 1s ${quart}`}}> 
              <p>
                Center<br />of custom Innovation
              </p>
              <p>
                Center of custom Innovation
              </p>
            </div>

            <div className='Innovation_Progress'>
              <div 
                style={{ 
                        height:'100%', 
                        width: 
                          swipe == 0 ? '16.7%' : 
                          swipe == 1 ? '33.33%': 
                          swipe == 2 ? '50%' : 
                          swipe == 3 ? '66.7%' : 
                          swipe == 4 ? '83.4%' : 
                          swipe == 5 ? '100%' : null, 
                        background:'rgba(146, 112, 44, 1)',
                        transition:`all 0.3s ${quart}`
                      }} 
                      />
            </div>

          </div>
          <div className='Innovation_ContentB'>
            {/* Desktop Component */}
              <div className='Innovation_ContentB_Container'>
                  {/* swiper */}
                <Swiper className='customLine' style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', padding:'1.3em 0', overflow:'hidden',
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
                          <SwiperSlide className='Innovation_Asset' style={{display:'flex', alignItems:'center', justifyContent:'center', transition: `all 1.2s ${quint}`}}  key={i}>
                              <div className='Innovation_SwiperImgContainer'>
                                <img style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.231em'}} src={data.src} alt='image' />
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
              {/* Desktop Component End */}

              {/* Mobile Component */}
              <div className='Innovation_ContentB_Container_Mobile'>
                <Swiper style={{transition:`all 0.3s ${quart}`}}
                  slidesPerView={1.2}
                  spaceBetween={20}
                  onSlideChange={(i) => setSwipe(i.activeIndex)}>
                  {
                    dummyData.map((data, i) => {
                      return(
                        <SwiperSlide style={{transition:`all 0.3s ${quart}`}} key={i}>
                          <div className='Innovation_SwiperImgContainer'>
                            <img 
                              style={{height:'100%', scale: swipe == i ? '1':'0.9' ,width:'100%', objectFit:'cover', borderRadius:'0.5em', transition:`all 0.1s ${quart}`}}
                              src={data.src} 
                              alt='img' />
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
              {/* Mobile Component End */}
          </div>
        </div>
    </div>
    </>
  )
}
