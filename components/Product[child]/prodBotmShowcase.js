/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/pagination';
import CTA from '../CTAComponent';


export default function ProductBottomShowcase({ video }){


    const testRef = useRef();
    const progressRef = useRef();

    let info = [
        {
            item: "CFRP",
            src:'/Products/cfrp.svg'
        },
        {
            item: "IP68 Resistant",
            src:'/Products/ip68.svg'
        },
        {
            item: "Machine Vision",
            src:'/Products/machinevision.svg'
        },
        {
            item: "Pnemuatics",
            src:'/Products/pneumatics.svg'
        },
    ]

    let logo = [
        {
            src:'/launch/GG[GandhiGlasses].svg'
        },
        {
            src:'/launch/Lion.svg'
        },
        {
            src:'/launch/digitalIndia.svg'
        },
        {
            src:'/launch/swachh.svg'
        },
        {
            src:'/launch/smartCity.svg'
        }
    ]

    let testimonialData = [
        {
            src:'/Products/testImgA.png',
            title: 'Startup India',
            description: '“Genrobotics, the winner of the ‘National Startup Award’, offer human controlled robots are alternative to manual scavenging, with successful implementation in various of india”.'
        },
        {
            src:'/Products/testImgA.png',
            title: 'Startup India',
            description: '“Genrobotics, the winner of the ‘National Startup Award’, offer human controlled robots are alternative to manual scavenging, with successful implementation in various of india”.'
        },
        {
            src:'/Products/testImgA.png',
            title: 'Startup India',
            description: '“Genrobotics, the winner of the ‘National Startup Award’, offer human controlled robots are alternative to manual scavenging, with successful implementation in various of india”.'
        },
        {
            src:'/Products/testImgA.png',
            title: 'Startup India',
            description: '“Genrobotics, the winner of the ‘National Startup Award’, offer human controlled robots are alternative to manual scavenging, with successful implementation in various of india”.'
        },
        {
            src:'/Products/testImgA.png',
            title: 'Startup India',
            description: '“Genrobotics, the winner of the ‘National Startup Award’, offer human controlled robots are alternative to manual scavenging, with successful implementation in various of india”.'
        },
    ]


    return(
        <>
        <section className="prodBtmSC">
            <div className="prodBtmSC_container">
                <div className="prodBtmSC_Title">
                    <p>Engineered to Outperform, Setting a New Standard</p>
                </div>
                <div className="prodBtmSC_A">
                    <div className="prodBtmSC_A_BluePrint_Container">
                        <div className="prodBtmSC_A_BluePrint">
                            <img src="/Products/Bandicoot 1.svg" alt="image" />
                        </div>
                        <div className="prodBtmSC_A_BluePrint">
                            <img src="/Products/Bandicoot 2.svg" alt="image" />
                        </div>
                    </div>
                    <div className="prodBtmSC_A_Info">
                        <div className="prodBtmSC_A_Info_Container">
                            {
                                info.map((data, i) => {
                                    return(
                                        <div className="prodBtmSC_A_Info_Item" key={i}>
                                            <div style={{height:'4em', width:'4em', borderRadius:'50%', background:'#FFF', margin:'0 0 1em 0', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt="logo" />
                                            </div>
                                            <div>
                                                <p>{data.item}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="prodBtmSC_B">
                    <div className="prodBtmSC_B_ImgContainer">
                        <div className="prodBtmSC_B_TextContainer">
                            <div className="prodBtmSC_B_TextContainer_eyebrow">
                                <p>
                                    Bandicoot
                                </p>
                            </div>
                            <div className="prodBtmSC_B_Img">
                                <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/map.png" alt="image" />
                            </div>
                            <div className="prodBtmSC_B_TextContainer_Title">
                                <p>
                                    <span className="textA">Now in</span><br /><span className="textB">19 states.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="prodBtmSC_B_ContainerB" style={{width:'48%', height:'100%', display:'flex', flexDirection:'column'}}>
                        {/* <div className="prodBtmSC_B_ImgB" style={{margin:'0 0 0.6em 0'}}>
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/imgA.png" alt="" />
                        </div> */}
                        {/* Swiper */}
                        <div className="prodBtmSC_B_Swiper_Container" >
                            <Swiper ref={testRef} style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', padding:'0em 0 0em 0',
                                    "--swiper-navigation-size":'2rem', "--swiper-pagination-bottom" : "8%", "--swiper-theme-color": "white", background:'#8C7024', borderRadius:'0.625em'}}
                                    spaceBetween={40}
                                    speed={1000}
                                    // pagination={{ clickable: true }}
                                    modules={[Pagination]}
                                    slidesPerView={1}
                                    onSlideChange={() => {
                                        if(testRef.current.swiper.activeIndex === 0) {
                                            progressRef.current.style.width = "20%"
                                        } else if(testRef.current.swiper.activeIndex === 1) {
                                            progressRef.current.style.width = "40%"
                                        } else if(testRef.current.swiper.activeIndex === 2) {
                                            progressRef.current.style.width = "60%"
                                        } else if(testRef.current.swiper.activeIndex === 3) {
                                            progressRef.current.style.width = "80%"
                                        } else if(testRef.current.swiper.activeIndex === 4) {
                                            progressRef.current.style.width = "100%"
                                        }
                                    } }
                                    onSwiper={(swiper) => console.log(swiper)}>
                                        {/* progress bar */}
                                <div className='progressBar'>
                                    <div className='progressBar_Inner' ref={progressRef} />
                                </div>
                                {
                                    testimonialData.map((data, i) => {
                                        return(
                                            <SwiperSlide style={{position:'relative', background:'#8C7024'}} key={i}>
                                                <div className='testimonial_Container'>
                                                    <div className='testimonial_Img'>
                                                        <img src={data.src} alt='image' />
                                                    </div>
                                                    <div className='testimonial_Title_Container'>
                                                        <div className='testimonial_Title'>
                                                            <p>
                                                                { data.title }
                                                            </p>
                                                        </div>
                                                        <div className='testimonial_description'>
                                                            <p>
                                                                { data.description }
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
                        <div className='prodBtmSC_B_Container_Vid_Container' style={{margin:'2.8em 0 0 0'}}>
                        <video autoPlay="true" muted="true" loop="true" playsInline="true" height="100%" width="100%" style={{height:'100%', width: '100%', objectFit:'cover', borderRadius:'10px'}}>
                            <source src={ video }  type="video/mp4" />
                            {/* <source src='/heroVideo.webm'  type="video/webm" />                 */}
                        </video>
                        </div>
                    </div>
                </div>

                {/* supported-by */}
                <div className="prodBtmSC_C" style={{padding:'2rem 2rem 2rem 2rem', margin:'2rem 0 2rem 0', fontSize:'1rem', background:'#EEEEEE', borderRadius:'0.625em', overflow:'hidden'}}>
                    <div className="prodBtmSC_C_Container" style={{display:'flex', alignItems:'center'}}>
                        <div style={{width:'40%'}}>
                            <div>
                                <p style={{fontSize:'2.5em'}}>Supported By</p>
                            </div>
                            {/* <div style={{width:'85%', padding:'1em 0'}}>
                                <p style={{fontSize:'1.1em'}}>
                                    Commited to deliver our solutions to work with extreme and unsafe environments universally 
                                </p>
                            </div> */}
                        </div>
                        {/* logos */}
                        <div style={{width:'60%', position:'relative' }}>
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                {
                                    logo.map((data, i) => {
                                        return(
                                            <div key={i}>
                                                <img src={data.src} alt="logo" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div style={{display:'flex', flexDirection:'column', padding:'4rem 0', alignItems:'center', justifyContent:'center'}}>
                    <div >
                        <p style={{textAlign:'center', color:'#322712', fontSize:'4.6em'}}>
                            {/* Ready to <br /> Innovate with us? */}
                            Bring<br /> Bandicoot to your City!
                        </p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', margin:'2em 0 0 0'}}>
                        <CTA height="4.4em" width="12em" widthB="6em" margin="0 2em 0 0" bg="#EEEEEA" />
                        <a href="https://mkp.gem.gov.in/advanced-manufacturing-robotics/bandicoot/p-5116877-4090503505-cat.html" target='_blank' style={{border:'1px rgba(50, 39, 18, 0.33) solid', display:'flex', alignItems:'center', padding:'0.4em 1em', borderRadius:'0.6em', cursor:'pointer'}}>
                            <div style={{height:'3em', width:'3em'}}><img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/purchaseBCoot.png" alt="image" /></div>
                            <div><p>Purchase Bandicoot</p></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}