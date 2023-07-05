/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
/**
 * @typedef {import("@prismicio/client").Content.BluePrintSlice} BluePrintSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BluePrintSlice>} BluePrintProps
 * @param {BluePrintProps}
 */
export default function BluePrint({ slice }) {


  const [image, setImage] = useState(0);
  const [ swipe, setSwipe ] = useState(0);

  // Transition
  let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
  let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

  // data - prismic 
   let title = `${slice.primary.title[0].text}`;

  
  let eyeBrowText = [{eyebrow: 'FEATURES',},{eyebrow: 'BLUEPRINT',},{eyebrow: 'BANDICOOT II',}]

  // refs
  const saferRef = useRef();
  const slideRef = useRef();
  const featureProgRef = useRef();
  

  const [ autoplay, setAutoplay ] = useState(false);

 

  
  
  useEffect(() => {
    
    // first-observer
    const observer = new IntersectionObserver((entries) => { // anim for the main-title
        entries.forEach(entry => {
          if(entry.isIntersecting) {
              saferRef.current.style.transform = 'translateX(0)';
          }
        }) 
      }, {threshold:0.3})
    observer.observe(document.getElementById("safe"));


    // second-observer
    const observerB = new IntersectionObserver((entries) => { // anim for feature-carousel
      entries.forEach(entry => {
        if(entry.isIntersecting) {

           setAutoplay(true)

           document.querySelectorAll(".featureCarousel_AssetDiv").forEach(assetDiv => {  // asset anim
              assetDiv.style.transform = 'translateY(0%)';
             })
          
          document.querySelectorAll(".featureCarousel_Swiper_idDiv").forEach(div => {  // blue-print anim for id
            div.style.opacity = '1';
          })
          document.querySelectorAll(".featureCarousel_Swiper_TitleDiv").forEach(div => { // blue-print anim for title
            div.style.opacity = '1';
          })
          
          setTimeout(() => {
            document.querySelectorAll(".featureCarousel_Swiper_DescriptionDiv").forEach(div => {  //delayed anim for blue-print description
              div.style.opacity = '1';
            })
          }, 500)

          // setTimeout(() => {
          //   slideRef.current.swiper.slideTo(1)
          //   SlideItemIndexColor[0].style.color ="#616161";
          //   SlideItemIndexColor[1].style.color ="#D1BD55";
  
          //   SlideItemTitleColor[0].style.color = "#616161";
          //   SlideItemTitleColor[1].style.color = "#D1BD55";
  
          //   SlideItemDescriptColor[0].style.color = "#616161";
          //   SlideItemDescriptColor[1].style.color = "#D1BD55";
  
          //   SlideItemImage[0].style.opacity = "0";
          //   SlideItemImage[1].style.opacity = "1";
          // }, 1500) 
  
          // setTimeout(() => {
          //   slideRef.current.swiper.slideTo(2)
          //   SlideItemIndexColor[1].style.color ="#616161";
          //   SlideItemIndexColor[2].style.color ="#D1BD55";
  
          //   SlideItemTitleColor[1].style.color = "#616161";
          //   SlideItemTitleColor[2].style.color = "#D1BD55";
  
          //   SlideItemDescriptColor[1].style.color = "#616161";
          //   SlideItemDescriptColor[2].style.color = "#D1BD55";
  
          //   SlideItemImage[1].style.opacity = "0";
          //   SlideItemImage[2].style.opacity = "1";
          // }, 2500) 
  
          // setTimeout(() => {
          //   slideRef.current.swiper.slideTo(3)
          //   SlideItemIndexColor[2].style.color ="#616161";
          //   SlideItemIndexColor[3].style.color ="#D1BD55";
  
          //   SlideItemTitleColor[2].style.color = "#616161";
          //   SlideItemTitleColor[3].style.color = "#D1BD55";
  
          //   SlideItemDescriptColor[2].style.color = "#616161";
          //   SlideItemDescriptColor[3].style.color = "#D1BD55";
  
          //   SlideItemImage[2].style.opacity = "0";
          //   SlideItemImage[3].style.opacity = "1";
          // }, 3500) 
  
          // setTimeout(() => {
          //   slideRef.current.swiper.slideTo(0)
          //   SlideItemIndexColor[3].style.color ="#616161";
          //   SlideItemIndexColor[0].style.color ="#D1BD55";
  
          //   SlideItemTitleColor[3].style.color = "#616161";
          //   SlideItemTitleColor[0].style.color = "#D1BD55";
  
          //   SlideItemDescriptColor[3].style.color = "#616161";
          //   SlideItemDescriptColor[0].style.color = "#D1BD55";
  
          //   SlideItemImage[3].style.opacity = "0";
          //   SlideItemImage[0].style.opacity = "1";
          // }, 4500)

        }
      })
    }, {threshold: 0.65})
    observerB.observe(document.getElementById("bluePrint"));


      

      if(autoplay === true) {
        // slideRef.current.swiper.autoplay.start()
        slideRef.current.swiper.autoplay.start()

      } else if( autoplay === false ) {
        slideRef.current.swiper.autoplay.stop()

        // slideRef.current.swiper.autoplay.stop()
      }


  })

  
  // const MouseEnter = () => {
  //   setAutoplay(false)
  // }

  // const MouseLeave = () => {
  //   setAutoplay(true)
  // }




  return(
    <section className='bluePrint' id='safe' style={{zIndex:'999'}}>
        <div className='bluePrint_Container'>

          <div className='bluePrint_TitleContainer'>
            <div className='bluePrint_Title' ref={saferRef}  
              style={{transform:'translateX(110%)', transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)'}}>
              <p>
                { title }
              </p>
                <div className='featureProgressBar'>
                  <div 
                    style={{
                      width: swipe == 0 ? '20%': swipe == 1 ? '40%': swipe == 2 ? '60%': swipe == 3 ? '100%': null,
                      transition: `all 0.3s ${quart}` }}
                    className='featureProgressBar_Inner' />
                </div>
            </div>
          </div>

          <div className='bluePrint_FeatureCarousel_Container'>
            {/* Desktop Component */}
            <div className='featureCarousel_Div'>
              <div className='eyebrow_Container'>
                {
                  eyeBrowText.map((data, i) => {
                    return(
                      <div className='eyebrow_Div' key={i}>
                        <p>
                          {data.eyebrow}
                        </p>
                      </div>
                    )
                  })
                }
              </div>
              <div className='featureCarousel_ContentContainer' id='bluePrint' >
                <div onMouseEnter={() => {
                  setAutoplay(false)
                  console.log("FALSE")
                }}  className='featureCarousel_SliderContainer'>
                  <Swiper  style={{height:'100%'}}
                    direction={'vertical'}
                    ref={slideRef}
                    modules={[Autoplay, Mousewheel ]}
                    slidesPerView={2.4}
                    onClick={() => setAutoplay(false)}
                    onMouseEnter={() => console.log( "FALSE")}
                    onSlideChange={(i) => {
                      let SlideIndex = document.querySelectorAll('.featureCarousel_Swiper_idDiv');
                      let SlideTitle = document.querySelectorAll('.featureCarousel_Swiper_TitleDiv');
                      let SlideDescript = document.querySelectorAll('.featureCarousel_Swiper_DescriptionDiv');
                      let SlideImage = document.querySelectorAll('.featureCarousel_AssetDiv');


                      if( autoplay == true ) {
                        if(i.activeIndex == 0) {

                          SlideIndex[3].style.color = "#616161"
                          SlideTitle[3].style.color = "#616161"
                          SlideDescript[3].style.color = "#616161"
                          SlideImage[3].style.opacity = "0"
                          
                          SlideIndex[0].style.color = "#D1BD55"
                          SlideTitle[0].style.color = "#D1BD55"
                          SlideDescript[0].style.color = "#D1BD55"
                          SlideImage[0].style.opacity = "1"
  
                         SlideIndex[1].style.color = "#616161"
                         SlideTitle[1].style.color = "#616161"
                         SlideDescript[1].style.color = "#616161"
                         SlideImage[1].style.opacity = "0"
  
                        } else if(i.activeIndex == 1) {
  
                          SlideIndex[0].style.color = "#616161"
                          SlideTitle[0].style.color = "#616161"
                          SlideDescript[0].style.color = "#616161"
                          SlideImage[0].style.opacity = "0"
  
                          SlideIndex[1].style.color = "#D1BD55"
                          SlideTitle[1].style.color = "#D1BD55"
                          SlideDescript[1].style.color = "#D1BD55"
                          SlideImage[1].style.opacity = "1"
  
                        } else if(i.activeIndex == 2) {
  
                          SlideIndex[1].style.color = "#616161"
                          SlideTitle[1].style.color = "#616161"
                          SlideDescript[1].style.color = "#616161"
                          SlideImage[1].style.opacity = "0"
  
  
  
                          SlideIndex[2].style.color = "#D1BD55"
                          SlideTitle[2].style.color = "#D1BD55"
                          SlideDescript[2].style.color = "#D1BD55"
                          SlideImage[2].style.opacity = "1"
                          setTimeout(() => {
                            SlideIndex[2].style.color = "#616161"
                            SlideTitle[2].style.color = "#616161"
                            SlideDescript[2].style.color = "#616161"
                            SlideImage[2].style.opacity = "0"
  
  
                            SlideIndex[3].style.color = "#D1BD55"
                            SlideTitle[3].style.color = "#D1BD55"
                            SlideDescript[3].style.color = "#D1BD55"
                            SlideImage[3].style.opacity = "1"
                          }, 1800)
                        } 
                      }
                      
                    }}
                    onSwiper={(i) => console.log(i, "hiiii")} > 
                    {
                      slice.items.map((data, i) => {
                        return(
                          <SwiperSlide  
                          className='singleSlide'
                          onClick={() => {
                            setAutoplay(false)
                            if(i === 0)  {
                              slideRef.current.swiper.slideTo(0, 500, `${quint}`)
                            } else if(i === 1) {
                              slideRef.current.swiper.slideTo(0, 500, `${quint}`)
                            } else if (i === 2) {
                              slideRef.current.swiper.slideTo(1, 500, `${quint}`)
                            } else if (i === 3) {
                              slideRef.current.swiper.slideTo(2, 500, `${quint}`)
                            }
                          }}

                          onMouseEnter={() => setAutoplay(false)}
                            key={i} 
                            style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', height:'fit-content', transition:'all 0.2s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                              <div className='featureCarousel_Swiper_TextContainer' onClick={() => setImage(i)}>
                                <div className='featureCarousel_Swiper_idDiv' 
                                  style={{color: image == i ? '#D1BD55':'#616161', opacity: '0', transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                                  <p>
                                    { data.blue_print_id[0].text }
                                  </p>
                                </div>
                                <div className='featureCarousel_Swiper_DetailContainer'>
                                  <div className='featureCarousel_Swiper_TitleDiv' 
                                    style={{color: image == i ? '#D1BD55':'#616161', opacity:'0', transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                                    <p>
                                      {  data.blue_print_title[0].text }
                                    </p>
                                  </div>
                                  <div className='featureCarousel_Swiper_DescriptionDiv' 
                                    style={{color: image == i ? '#D1BD55':'#3D3D3D', opacity:'0', transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                                    <p>
                                      { data.blue_print_description[0].text }
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>

                <div className='featureCarousel_AssetContainer'>
                  <div className='featureCarousel_AssetContainer_Inner'>
                    
                    <div className='featureCarousel_Asset'>
                      {
                        slice.items.map((data, i) => {
                          return(
                            <div className='featureCarousel_AssetDiv' key={i} 
                              style={{transition:'all 1.2s cubic-bezier(0.85, 0, 0.15, 1)', opacity: image == i ? '1':'0', transform:'translateY(-115%)'}}>
                                <img
                                  style={{height:'100%', width:'100%', objectFit:'contain'}}
                                  src={data.blue_print_asset.url} alt={data.blue_print_asset.alt} />
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Component End */}
            {/* Mobile Component */}
            <div className='featureCarousel_Container_Mob'>
              <Swiper 
                onSlideChange={(i) => setSwipe(i.activeIndex)}
                slidesPerView={1.15}
                spaceBetween={20}>
                {
                  slice.items.map((data, i) => {
                    return(
                      <SwiperSlide key={i}>
                        <div className='featureCarousel_Inner'>
                          <div style={{height:'120em', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <div className='featureCarousel_AssetDiv'>
                              <PrismicNextImage 
                                style={{height:'100%', width:'100%', objectFit:'contain'}}
                                field={data.blue_print_asset} alt={data.blue_print_asset.alt} />
                            </div>
                            <div className='featureCarousel_Swiper_TitleDiv'>
                                <p style={{color:'#FFF'}}>
                                  <PrismicRichText field={data.blue_print_title} />
                                </p>
                            </div>
                            <div className='featureCarousel_Swiper_DescriptionDiv'>
                              <p style={{color:"#8C8C8C"}}>
                                <PrismicRichText field={data.blue_print_description} />
                              </p>
                            </div>
                          </div>
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
      </section>
  )
}
