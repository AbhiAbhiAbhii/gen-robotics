/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import { useEffect, useRef, useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const divRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {

  //     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  //     const scrolled = window.scrollY;   

  //     if(Math.ceil(scrolled) === scrollable) {
  //        divRef.current.style.transform = 'translateX(0%)';
  //     }

  //     console.log('scrollable',scrollable);
  //     console.log('scrolled', Math.ceil(scrolled))
  //   })
  // })

  const [image, setImage] = useState(0);
  const [solution, setSolution] = useState(0);
  const [modi, setModi] = useState(0);


  let eyeBrowText = [
    {
      eyebrow: 'FEATURES',
    },
    {
      eyebrow: 'BLUEPRINT',
    },
    {
      eyebrow: 'BANDICOOT II',
    }
  ]

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

  let launchLogos = [
    {
      src: '/launch/GG[GandhiGlasses].svg'
    },
    {
      src: '/launch/Lion.svg'
    },
    {
      src:'/launch/swachh.svg'
    },
    {
      src:'/launch/smartCity.svg'
    }
  ]

  let imgData = [
    {
      src: '/launch/modi.svg'
    },
    {
      src: '/launch/imgB.svg'
    },
    {
      src: '/launch/imgC.svg'
    },
    
  ]

  let textData= [
    {
      date: '2.10.2018',
      title:'The world’s first Robotic Scavenger',
      description:'The World’s First Robotic Scavenger designed to eliminate manual scavenging, was launched in the presence of Hon’ble Prime Minister, Shri Narendra Modi and U.N.Secretary-General Mr Antonio Guterres in the..'
    }
  ]

  const animRef = useRef();
  const descriptA = useRef();
  const blockA = useRef();
  const blockB = useRef();

  const bandiCootRef = useRef();
  const saferRef = useRef();

  const rangeRef = useRef();
  const innovRef = useRef();

  const launchRef = useRef();
  const supportRef = useRef();
   useEffect(() => {
     const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
              console.log('intersecting')
              setTimeout(() => {
              animRef.current.style.opacity = '1';
              }, 500)
              setTimeout(() => {
              descriptA.current.style.opacity = '1';
              },1000)
              setTimeout(() => {
              blockA.current.style.opacity = '1';
              }, 1500)
              setTimeout(() => {
              blockB.current.style.opacity = '1';
              },2000)
          }
      })
    })

    observer.observe(document.getElementById("animRef"))

    const observerB = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          bandiCootRef.current.style.opacity = '1';
        }
      })
    },{threshold:0.3})
    observerB.observe(document.getElementById("genro"))

    const observerC = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
           saferRef.current.style.transform = 'translateX(0)';
        }
      }) 
    })
    observerC.observe(document.getElementById("safe"))

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

    const observerE = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          launchRef.current.style.opacity = '1';
          setTimeout(() => {
            supportRef.current.style.opacity = '1';
          },1000)
        }
      })
    }, {threshold:0.2})
    observerE.observe(document.getElementById("Launch"))

   },[])




  return (
    <>
      <Head>
        <title>GenRobotics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero  />
      <section className='showCaseText'>
        <div className='showCaseTextContainer'>
          <div className='MAIN' style={{}}>
            <div className='A' style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', padding:'4rem 0'}}>
              <div id='animRef' ref={animRef}  className='showCaseTextA' style={{width:'48%', fontSize:'2.6rem', lineHeight:'120%', opacity:'0', transition:'all 4s ease'}}>
                <p>Engineered for Cleaning any type of sewer manholes.</p>
              </div>
              <div className='showCaseTextB' ref={descriptA} style={{width:'50%', color:'#666666', fontSize:'1.6rem', lineHeight:'120%', opacity:'0', transition:'all 3s ease'}}>
                <p>The bandicoot is a specialized robot designed to clean sewer manholes of any kind. With its advanced engineering, it can clean manholes efficiently and effectively and provide safety for the workers
                </p>
              </div>
            </div>
            <div className='B' style={{display:'flex', alignItems:'center', justifyContent:'flex-end', padding:'4rem 0'}}>

              <div ref={blockA} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', textAlign:'left', marginRight:'10rem', opacity:'0', transition:'all 3s ease'}}>
                <div style={{fontSize:'7rem', display:'flex', alignItems:'flex-start'}}><p>125kg</p></div>
                <div style={{fontSize:'1.2rem',  padding:'0 0 0 2%'}}><p>Lifting capacity</p></div>
              </div>

              <div ref={blockB} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', opacity:'0', transition:'all 3s ease'}}>
                <div style={{fontSize:'7rem'}}><p>10m</p></div>
                <div style={{fontSize:'1.2rem', padding:'0 0 0 2%'}}><p>Diving capacity</p></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='showCaseDummy' style={{padding:'2rem 0'}}>
        <div className='showCaseDummyContainer' style={{padding:'2rem 0'}}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div ref={bandiCootRef} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 4rem 4rem 4rem', transition:'all 2s ease', opacity:'0'}}>
              <div style={{fontSize:'1rem'}}><p>Introducing</p></div>
              <div style={{fontSize:'7rem'}}><p>Bandicoot 2.0</p></div>
            </div>
            <div className='genroDummy' id='genro' style={{ height:'61rem', width:'100%'}}>
              <img style={{height:'100%', width:"100%", objectFit:'cover'}} src='/showCaseDummy.svg' alt='' />
            </div>
          </div>
        </div>
      </section>

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
      

      <section className="Launch" id='Launch' style={{padding:'2rem'}}>
        <div className='LaunchContainer' style={{padding:'2rem 4rem'}}>
          <div className='textContainer' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <div className='launchedText' ref={launchRef} style={{fontSize:'8rem', letterSpacing:'-0.04em', textAlign:'center', width:'60%', lineHeight:'100%', padding:'2rem 0', opacity:'0', transition:'all 2s ease'}}><p>Launched & Supported by</p></div>
            <div ref={supportRef} style={{fontSize:'1.6rem', width:'50%', textAlign:'center', color:'#020202', letterSpacing:'-0.02em', lineHeight:'160%', padding:'1rem 0', opacity:'0', transition:'all 2s ease'}}>
              <p>Committed to deliver our solutions
                to work with extreme and unsafe 
                environments universally.
              </p>
            </div>
          </div>

          <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', margin:'6rem 0'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'80%' }}>
              {
                launchLogos.map((data, i) => {
                  return(
                    <div style={{width:'20%', height:'4rem', display:'flex', justifyContent:'center', alignItems:'center'}} key={i}>
                      <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt='logo' />
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>

        <div className='dummyModi' style={{}}>
          <div style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            {
              imgData.map((data, i) => {
                return(
                  <div key={i} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}> {/* image-container */}
                    <div onClick={() => setModi(i)} style={{ width: i == modi ? '30rem':'20.3rem', height:'30.6rem', margin:'0 1rem', cursor:'pointer', transition:'all 1s ease'}} key={i}> {/* image */} 
                      <img style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.6rem'}} src={data.src} alt='img' />
                    </div> 
                  </div>
                )
              })
            }
          </div>
          <div style={{padding:'2rem 4rem'}}>
            <div style={{padding:'2rem 6rem'}}>
              {
                textData.map((textData, i) => {
                  return(
                    <div key={i}>
                    <div style={{color:'#000',fontSize:'0.6rem',fontWeight:'700'}}><p>{textData.date}</p></div>
                    <div style={{fontSize:'2.3rem', fontWeight:'700', padding:'0.4rem 0 1rem 0', width:'30%', lineHeight:'110%'}}><p>{textData.title}</p></div>
                    <div style={{fontSize:'0.8rem', width:'38%', lineHeight:'150%', padding:'0 0 1rem 0'}}><p>{textData.description}</p></div>
                    <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
                      <div style={{fontWeight:'600', margin:'0 1rem 0 0'}}><p>Read more</p></div>
                      <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'1.6rem', width:'1.6rem', borderRadius:'20rem', background:'#4D3300'}}>
                        <img style={{height:'50%', width:'50%', objectFit:'contain'}} src='/solutions/arrow.svg' alt='arrow' />
                      </div>
                    </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
