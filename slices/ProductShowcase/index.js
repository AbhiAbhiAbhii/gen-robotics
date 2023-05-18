/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
/**
 * @typedef {import("@prismicio/client").Content.ProductShowcaseSlice} ProductShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductShowcaseSlice>} ProductShowcaseProps
 * @param {ProductShowcaseProps}
 */
export default function ProductShowcase({ slice }){


  const [solution, setSolution] = useState(0);

  // data - prismic 
  
  let title = `${ slice.primary.title[0].text }`;
  let description = `${ slice.primary.description[0].text }`;

  // refs
  const titleRef = useRef();
  const descRef = useRef();
  const shwcseRef = useRef();

  useEffect(() => {
    // first-observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            titleRef.current.style.transform = 'translateY(0%)'; // anim for title
            setTimeout(() => {
              descRef.current.style.transform = 'translateY(0%)'; // anim for description
            },500)
          }
        })
      }, {threshold: 0.4})
    observer.observe(document.getElementById("range"));

    // second-observer
    const observerB = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          shwcseRef.current.style.opacity = '1';
        }
      })
    }, {threshold:0.8})
    observerB.observe(document.getElementById("shwCase"));

  }, [])

  return(
    <section className='prodShowcase' id='globalObserver'>
      <div className='prodShowcase_Container'>
        <div className='prodShowcase_Header_Container' id='range'>
          <div className='prodShowcase_Header_Title' style={{overflow:'hidden'}}>
            <p ref={titleRef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
              { title }
            </p>
          </div>
          <div className='prodShowcase_Header_Description' style={{overflow:'hidden'}}>
              <p ref={descRef} style={{transition: 'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)', transform:'translateY(100%)'}}>
                { description }
              </p>
          </div>
        </div>
        <div className='prodShowcase_SwiperContainer' id='shwCase' ref={shwcseRef} style={{opacity:'0', transition:'all 1.2s cubic-bezier(0.85, 0, 0.15, 1)'}}>
          <Swiper
              slidesPerView={2.3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              {
              slice.items.map((data, i) => {
                  return(
                  <SwiperSlide className='prodShowcase_SwiperSlide'  onClick={() => setSolution(i)}
                  style={{width:'fit-content',cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px'}} 
                  key={i}>
                      <div className='prodShowcase_AssetDiv' style={{background: i == solution ? '#B6B6B6':'#F8F8F8' , transition:'all 0.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                        <div className='prodShowcase_AssetModel'>
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} 
                            src={ data.product_image.url } 
                            alt={ data.product_image.alt } />
                        </div>
                        <div className='prodShowcase_Asset_DetailsDiv' style={{transition:'all 0.3s cubic-bezier(0.85, 0, 0.15, 1)', borderBottomLeftRadius: i == solution ? '0.6rem':'', borderBottomRightRadius: i == solution ? '0.6rem':'', background: i == solution ? '#D1BD55': ''}}>
                            <div className='prodShowcase_Asset_TitleDiv' style={{ color: i == solution ? '#322712':'#100E0C', transition:'all 0.3s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                              <p>
                                { data.product_title[0].text }
                              </p>
                            </div>
                            <div className='prodShowcase_Asset_DescriptionDiv' style={{color: i == solution ? '#322712':'#100E0C', transition:'all 0.3s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                              <p>
                                {data.product_description[0].text}
                              </p>
                            </div>
                            {/* arrow icon */}
                            <div style={{opacity: i == solution ? '1':'0', transition:'all 0.3s cubic-bezier(0.85, 0, 0.15, 1)', position:'absolute', right:'10%', top:'50%', transform:'translate(0, -50%)', borderRadius:'50%', height:'3rem', width:'3rem', background:'#020202', display:'flex', alignItems:'center', justifyContent:'center'}}>
                              <img style={{height:'50%', width:'50%', objectFit:'contain'}} src='/solutions/arrow.svg' alt='' />
                            </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  )
              })
              }
          </Swiper>
        </div>
      </div>
    </section>
  )
}
