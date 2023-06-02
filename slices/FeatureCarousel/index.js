/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
/**
 * @typedef {import("@prismicio/client").Content.BluePrintSlice} BluePrintSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BluePrintSlice>} BluePrintProps
 * @param {BluePrintProps}
 */
export default function BluePrint({ slice }) {


  const [image, setImage] = useState(0);

  // data - prismic 
   let title = `${slice.primary.title[0].text}`;

  
  let eyeBrowText = [{eyebrow: 'FEATURES',},{eyebrow: 'BLUEPRINT',},{eyebrow: 'BANDICOOT II',}]

  // refs
  const saferRef = useRef();

  
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

        }
      })
    }, {threshold: 0.65})
    observerB.observe(document.getElementById("bluePrint"));


  },[])



  return(
    <section className='bluePrint' id='safe'>
        <div className='bluePrint_Container'>

          <div className='bluePrint_TitleContainer'>
            <div className='bluePrint_Title' ref={saferRef}  
              style={{transform:'translateX(110%)', transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)'}}>
              <p>
                { title }
              </p>
            </div>
          </div>

          <div className='bluePrint_FeatureCarousel_Container'>
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
              <div className='featureCarousel_ContentContainer' id='bluePrint'>
                <div className='featureCarousel_SliderContainer'>
                  <Swiper style={{height:'100%'}}
                    direction={'vertical'}
                      // autoplay={{
                      //   delay: 2000,
                      //   disableOnInteraction: false,
                      // }}
                    //  loop='true'
                    modules={[Autoplay]}
                    slidesPerView={2.4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} 
                    > 
                    {
                      slice.items.map((data, i) => {
                        return(
                          <SwiperSlide 
                          
                            key={i} 
                            style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', height:'fit-content'}}>
                              <div className='featureCarousel_Swiper_TextContainer' onClick={() => setImage(i)} >
                                <div className='featureCarousel_Swiper_idDiv' 
                                  style={{color: image == i ? '#D1BD55':'#616161', opacity:'0', transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)'}}>
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
                    
                    <div className='featureCarousel_Asset' style={{}}>
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

            
          </div>
        </div>
      </section>
  )
}
