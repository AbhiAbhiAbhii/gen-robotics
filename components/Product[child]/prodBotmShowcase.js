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
                {/* Mobile Component(Supported By) */}
                <div className='prodBtmSC_C_Mob_Container'>
                    <div className='prodBtmSC_C_Mob_Title'>
                        <p>
                            Supported by
                        </p>
                    </div>
                    <div className="prodBtmSC_C prodBtmSC_C_Mob">
                        <div className="prodBtmSC_C_Container">
                            
                            {/* logos */}
                            <div className='prodBtmSC_C_Mob_Logo_Container'>
                                <div className='prodBtmSC_C_Mob_Logo_Inner_Container'>
                                    {
                                        logo.map((data, i) => {
                                            return(
                                                <div className='prodBtmSC_C_Mob_Logo_Item' key={i}>
                                                    <img src={data.src} style={{height:'100%', width:'100%', objectFit:'contain'}} alt="logo" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Component End */}
                {/* Bottom B */}
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
                    <div className="prodBtmSC_B_ContainerB">
                        {/* Swiper */}
                        <div className="prodBtmSC_B_Swiper_Container" >
                            <Swiper ref={testRef} style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px',
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
                        <div className='prodBtmSC_B_Container_Vid_Container'>
                        <video autoPlay="true" muted="true" loop="true" playsInline="true" height="100%" width="100%" style={{height:'100%', width: '100%', objectFit:'cover', borderRadius:'10px'}}>
                            <source src={ video }  type="video/mp4" />
                            {/* <source src='/heroVideo.webm'  type="video/webm" />*/}
                        </video>
                        </div>
                    </div>
                </div>

                {/* supported-by */}
                <div className="prodBtmSC_C">
                    <div className="prodBtmSC_C_Container">
                            <div style={{width:'38%'}}>
                                <p style={{fontSize:'2.5em'}}>Supported By</p>
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
                <div className='prodBtmSC_D'>
                    <div className='prodBtmSC_D_Title'>
                        <p>
                            Bring<br /> Bandicoot to your City!
                        </p>
                        <p>
                            Bring Bandicoot to your City!
                        </p>
                    </div>
                    <div className='prodBtmSC_D_CTA_Container'>
                        <CTA classNameA="prodBtmSC_D_CTA_A_A" classNameB="prodBtmSC_D_CTA_A_B" classNameC="prodBtmSC_D_CTA_A_C" bg="#FFF" />
                        <a className='prodBtmSC_D_CTA_B' 
                            href="https://mkp.gem.gov.in/advanced-manufacturing-robotics/bandicoot/p-5116877-4090503505-cat.html" 
                            target='_blank' >
                            <div className='prodBtmSC_D_CTA_B_Img'>
                                <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/purchaseBCoot.png" alt="image" />
                            </div>
                            <div>
                                <p>Purchase Bandicoot</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}