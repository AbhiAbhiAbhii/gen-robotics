/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';

export default function ProductShowcase() {


    const [solution, setSolution] = useState(0);

    let swiperDataB = [
        {
          title: 'Willboar',
          description: 'Offering a safe and efficient solution for maintaining the Sewer Treatment systems without risking human lives',
          src:'/solutions/willBoar.svg'
        },
        {
          title: 'G-Beetle',
          description: 'Offering a safe and efficient solution for robotic skyscraper facade cleaning & maintenance work including storm water holes',
          src:'/solutions/gBeetle.svg'
        },
        {
          title: 'Willboar',
          description:'Offering a safe and efficient solution for maintaining the Sewer Treatment systems without risking human lives',
          src: '/solutions/willBoar.svg'
        }
      ]

      const rangeRef = useRef();
      const innovRef = useRef();

      useEffect(() => {
        
        const observerD = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting) {
                rangeRef.current.style.opacity = '1';
                setTimeout(() => {
                  innovRef.current.style.opacity = '1';
                },500)
              }
            })
          })
        observerD.observe(document.getElementById("range"))
      })


    return(
        <section className='solutions' style={{padding:'2rem'}}>
            <div className='' style={{padding:'2rem 4rem'}}>
                <div className='contentTop' id='range' style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <div ref={rangeRef} style={{fontSize:'5.6rem', width:"40%", color:'#010101', opacity:'0', transition:'all 2s ease'}}><p>Our Range <br />of solutions</p></div>
                    <div ref={innovRef} style={{fontSize:'1.5rem', width:'50%', color:'#666666', lineHeight:'140%', opacity:'0', transition:'all 2s ease'}}>
                        <p>
                        Continuous Innovation at the core for developing tailor-made
                        robotic technologies that ensure safety and empowerment to uplift
                        the lives of people.
                        </p>
                    </div>
                </div>
                <div>
                <Swiper style={{}}
                    slidesPerView={2.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {
                    swiperDataB.map((data, i) => {
                        return(
                        <SwiperSlide onClick={() => setSolution(i)}
                        style={{padding:'2rem 0 0 0', width:'fit-content',cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px'}} 
                        key={i}>
                            <div style={{background: i == solution ? '#B6B6B6':'#F8F8F8' , transition:'all 0.6s ease',borderRadius:'.6rem', height:'30rem', width: '36rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', padding:'1.6rem 0 0 0'}}>
                            <div style={{height:'50%', width:'54%'}}>
                                <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt='machine' />
                            </div>
                            <div style={{position:'relative', width:'90%', transition:'all 0.3s ease', padding:'1rem 0 1rem 1rem', borderBottomLeftRadius: i == solution ? '0.6rem':'', borderBottomRightRadius: i == solution ? '0.6rem':'', background: i == solution ? '#493E29': '', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
                                <div style={{fontSize:'1.8rem', fontWeight:'600', padding:'0.4rem 0', color: i == solution ? '#F8F8F8':'#100E0C', transition:'all 0.3s ease'}}><p>{data.title}</p></div>
                                <div style={{fontSize:'1rem', width:'70%', color: i == solution ? '#F8F8F8':'#100E0C', transition:'all 0.3s ease'}}><p>{data.description}</p></div>
                                <div style={{opacity: i == solution ? '1':'0', transition:'all 0.3s ease', position:'absolute', right:'10%', top:'50%', transform:'translate(0, -50%)', borderRadius:'50%', height:'3rem', width:'3rem', background:'#4D3300', display:'flex', alignItems:'center', justifyContent:'center'}}>
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