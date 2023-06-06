/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import {Mousewheel, FreeMode, Scrollbar } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';

import { gsap } from "gsap/dist/gsap";
import { TweenMax } from 'gsap/dist/gsap';
import { TweenLite } from 'gsap/dist/gsap';
import Drag from '../../components/DragComponent';
/**
 * @typedef {import("@prismicio/client").Content.ProductShowcaseSlice} ProductShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductShowcaseSlice>} ProductShowcaseProps
 * @param {ProductShowcaseProps}
 */
export default function ProductShowcase({ slice }){


  const [solution, setSolution] = useState(0);
  const [swipe, setSwipe] = useState(0)


  // data - prismic 
  
  let title = `${ slice.primary.title[0].text }`;
  let description = `${ slice.primary.description[0].text }`;

  let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
  let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

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

  useEffect(() => {

    setTimeout(() => {
      var cursor = document.querySelector(".DragContainer");

      document.addEventListener("mousemove", moveCursor);

      function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;
        // console.log(x,y)
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }

      let CursorContainer = document.querySelector('.prodShowcase_SwiperContainer') 

      CursorContainer.addEventListener('mouseenter', () => {
        cursor.classList.add('CursorActive');
      })

      CursorContainer.addEventListener('mouseleave', () => {
        cursor.classList.remove('CursorActive');
      })
  
    }, 9000)

  })


 

  return(
    <section className='prodShowcase' id='globalObserver'>
      <div className='prodShowcase_Container'>
        <div className='prodShowcase_Header_Container' id='range' style={{position:'relative'}}>
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
          {/* PROGRESS BAR */}
          <div className='prod_Progress_Bar_Outer'>
            <div className='prod_Progress_Bar_Container'>
              <div style={{position:'absolute', left:'0', top:'0', borderRadius:'20em', height:'100%', 
              width: swipe === 0 ? '10%': swipe === 1 ? '50%': swipe === 2 ? '100%':null , 
              background:'#AF9347', transition:`all 1s ${quart}`}}>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className='prodShowcase_SwiperContainer' id='shwCase' ref={shwcseRef} style={{transition:'all 1.2s cubic-bezier(0.85, 0, 0.15, 1)'}}>
          {/* Drag Component */}
          <Drag className="DragContainer" />
          <Swiper
              slidesPerView={2.3}
              // modules={[Mousewheel, FreeMode, Scrollbar]}
              // freeMode={true}
              // mousewheel={true}
              onSlideChange={(i) => setSwipe(i.activeIndex)}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChangeTransitionStart={(i) => console.log("hii")}>
              {
              slice.items.map((data, i) => {
                  return(
                  <SwiperSlide className='prodShowcase_SwiperSlide'   onClick={() => setSolution(i)}
                  style={{width:'fit-content',scrollSnapType:'x mandatory',scrollPadding:'0 24px'}} 
                  key={i}>
                      <div className='prodShowcase_AssetDiv' 
                      style = {
                          {
                            background: i == solution ? '#B6B6B6':'#F8F8F8' , 
                            transition:'all 0.6s cubic-bezier(0.85, 0, 0.15, 1)'
                          }
                        }>
                        <div className='prodShowcase_AssetModel'>
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} 
                            src={ data.product_image.url } 
                            alt={ data.product_image.alt } />
                        </div>
                        <div className='prodShowcase_Asset_DetailsDiv' 
                        style={
                            { 
                              transition:'all 0.3s cubic-bezier(0.85, 0, 0.15, 1)', 
                              borderBottomLeftRadius: i == solution ? '0.6rem':'', 
                              borderBottomRightRadius: i == solution ? '0.6rem':'', 
                              background: i == solution ? '#D1BD55': ''
                            }
                          }>
                            <div className='prodShowcase_Asset_TitleDiv' 
                            style = {
                                { 
                                  color: i == solution ? '#322712':'#100E0C', 
                                  transition:'all 0.3s cubic-bezier(0.85, 0, 0.15, 1)'
                                }
                              }>
                              <p>
                                { data.product_title[0].text }
                              </p>
                            </div>
                            <div className='prodShowcase_Asset_DescriptionDiv' 
                              style={
                                  {
                                  color: i == solution ? '#322712':'#100E0C', 
                                  transition:'all 0.3s cubic-bezier(0.85, 0, 0.15, 1)'
                                  }
                                }>
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
