/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';


export default function BluePrint() {

    const [image, setImage] = useState(0);


    let eyeBrowText = [{eyebrow: 'FEATURES',},{eyebrow: 'BLUEPRINT',},{eyebrow: 'BANDICOOT II',}]
    let swiperData = [
        {
          index: '01',
          title: 'More Reachablilty To Every Corner',
          description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each leg, creating more reachability and 100% efficiency.',
          src: '/BluePrint/m-r.svg'
        },
        {
          index: '02',
          title: 'Precise and Surgical Cleaning',
          description: 'Designed with expandable Multi-functioning Robotic Arm that performs Picking, Grabbing and Shovelling, helps in precise surgical cleaning.',
          src: '/BluePrint/p-c.svg'
        },
        {
          index: '03',
          title: 'More Reachablilty To Every Corner',
          description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each leg, creating more reachability and 100% efficiency.',
          src: '/BluePrint/m-r.svg'
        }
      ]

      const saferRef = useRef();

      useEffect(() => {
        const observerC = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting) {
                 saferRef.current.style.transform = 'translateX(0)';
              }
            }) 
          })
        observerC.observe(document.getElementById("safe"))
      })
    
    
    return(
        <section className='bluePrint' style={{padding:'2rem'}}>
        <div style={{padding:'0 0'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div ref={saferRef} id='safe' style={{fontSize:'6.2rem', textAlign:'center', lineHeight:'120%', letterSpacing:'-0.04em', transform:'translateX(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)', transitionDelay:'0.3s'}}>
              <p>Safer ! Efficient ! and humanly</p>
            </div>
          </div>

          <div style={{padding:'6rem 4rem' }}>
            <div style={{background:'rgba(0, 0, 0, 0.85)', borderRadius:'0.2rem', padding:'2rem 2rem 0 2rem'}}>
              <div style={{color:'rgba(221, 199, 88, 1)', fontSize:'0.7rem', display:'flex', justifyContent:'space-between'}}>
                {
                  eyeBrowText.map((data, i) => {
                    return(
                      <div key={i}>
                        <p>{data.eyebrow}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div style={{display:'flex', justifyContent:'space-between', padding:'4rem 4rem 2rem 0'}}>
                <div style={{height:'80vh', width:'50%'}}>
                  <Swiper style={{height:'100%'}}
                    direction={'vertical'}
                    //  autoplay={{
                    //    delay: 2000,
                    //    disableOnInteraction: false,
                    //  }}
                    // loop="true"
                    modules={[Autoplay]}
                    slidesPerView={2.4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} 
                    > 
                    {
                      swiperData.map((data, i) => {
                        return(
                          <SwiperSlide 
                            key={i} 
                            style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', height:'fit-content'}}>

                              <div onClick={() => setImage(i)} style={{display:'flex'}}>
                                <div style={{fontSize:'1.6rem', display:'flex', alignItems:'flex-start', padding:'0.2rem 1rem 0 0', color: image == i ? '#F3F3F3':'#616161', transition:'all 0.4s ease'}}><p>{data.index}</p></div>
                                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', padding:'0 1rem'}}>
                                  <div style={{fontSize:'2rem', fontWeight:'600', width:'60%', color: image == i ? '#F3F3F3':'#616161', transition:'all 0.4s ease'}}><p>{data.title}</p></div>
                                  <div style={{fontSize:'1.2rem', fontWeight:'400', width:'80%', padding:'1rem 0', color: image == i ? '#898989':'#3D3D3D', transition:'all 0.4s ease'}}><p>{data.description}</p></div>
                                </div>
                              </div>

                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>
                <div style={{width:'40%', padding:'0 0 6rem 0', display:'flex', alignItems:'flex-end'}}>
                  <div style={{border:'1px #656565 solid', width:'100%', height:'100%', borderRadius:'0.6rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    {/* <div>
                    {
                      image === 0 ?
                      <div style={{height:'80%', width:'80%'}}>
                        <img
                        style={{height:'100%', width:'100%', objectFit:'contain'}}
                        src='/BluePrint/m-r.svg' alt='bluePrnt' />
                      </div>
                      :
                      image === 1 ?
                      <div style={{height:'80%', width:'80%'}}>
                        <img
                        style={{height:'100%', width:'100%', objectFit:'contain'}}
                        src='/BluePrint/p-c.svg' alt='bluePrnt' />
                      </div>
                      :
                      image === 2 ?
                      <div style={{height:'80%', width:'80%'}}>
                        <img
                        style={{height:'100%', width:'100%', objectFit:'contain'}}
                        src='/BluePrint/m-r.svg' alt='bluePrnt' />
                      </div>
                      : null
                    }
                    </div> */}
                    <div style={{position:'relative', display:'flex', flexWrap:'nowrap', whiteSpace:'nowrap', flexDirection:'column', alignItems:'center', justifyContent:'center', overflow:'hidden',  height:'100%', width:'100%'}}>
                      {
                        swiperData.map((data, i) => {
                          return(
                            <div key={i} style={{height:'90%', width:'90%',  transition:' all 1s ease', opacity : image == i ? '1':'0', position:'absolute'}}>
                              <img
                              style={{height:'100%', width:'100%', objectFit:'contain'}}
                              src={data.src} alt='bluePrnt' />
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