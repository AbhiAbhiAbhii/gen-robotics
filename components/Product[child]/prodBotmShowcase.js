/* eslint-disable @next/next/no-img-element */
import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/pagination';


export default function ProductBottomShowcase(){

    let info = [
        {
            item: "IP68 Resistant"
        },
        {
            item: "IP68 Resistant"
        },
        {
            item: "IP68 Resistant"
        },
        {
            item: "IP68 Resistant"
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

    let dummyData = [
        {
            src:'/Products/dummyA.png'
        },
        {
            src:'/Products/dummyB.png'
        },
        {
            src:'/Products/dummyC.png'
        }
    ]

    return(
        <>
        <section className="prodBtmSC">
            <div className="prodBtmSC_container">
                <div className="prodBtmSC_Title">
                    <p>Another title can go here, that is explaining the build items</p>
                </div>
                <div className="prodBtmSC_A">
                    <div className="prodBtmSC_A_BluePrint_Container">
                        <div className="prodBtmSC_A_BluePrint">
                            <img src="/Products/blueprint.svg" alt="image" />
                        </div>
                    </div>
                    <div className="prodBtmSC_A_Info">
                        <div className="prodBtmSC_A_Info_Container">
                            {
                                info.map((data, i) => {
                                    return(
                                        <div className="prodBtmSC_A_Info_Item" key={i}>
                                            <div style={{height:'4em', width:'4em', borderRadius:'50%', background:'#000', margin:'0 0 1em 0'}}></div>
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
                                    <span className="textA">Now in</span><br /><span className="textB">16 states.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="prodBtmSC_B_ContainerB" style={{width:'48%', height:'100%', display:'flex', flexDirection:'column'}}>
                        <div className="prodBtmSC_B_ImgB" style={{margin:'0 0 0.6em 0'}}>
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/imgA.png" alt="" />
                        </div>
                        {/* <div>
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/imgB.png" alt="" />
                        </div> */}
                        {/* Swiper */}
                        <div className="prodBtmSC_B_Swiper_Container">
                            <Swiper style={{cursor:'grab',scrollSnapType:'x mandatory',scrollPadding:'0 24px', padding:'0 0 0 0',
                                    "--swiper-navigation-size":'2rem', "--swiper-pagination-bottom" : "8%", "--swiper-theme-color": "white"}}
                                    spaceBetween={40}
                                    speed={1000}
                                    pagination={{ clickable: true }}
                                    modules={[Pagination]}
                                    slidesPerView={1}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}>
                                {
                                    dummyData.map((data, i) => {
                                        return(
                                            <SwiperSlide style={{position:'relative'}} key={i}>
                                                <div className='swiperImg_Div'>
                                                    <img src={ data.src } alt='image' />
                                                </div>
                                                <div style={{position:'absolute', bottom:'6%', left:'4%'}}>
                                                    <div><p style={{fontSize:'24px', color:'#FFFF'}}>Name here</p></div>
                                                    <div><p style={{color:'rgba(255,255,255,0.5)'}}>Location or roll can go here</p></div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
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
                            <div style={{width:'85%', padding:'1em 0'}}>
                                <p style={{fontSize:'1.1em'}}>
                                    Commited to deliver our solutions to work with extreme and unsafe environments universally 
                                </p>
                            </div>
                        </div>
                        {/* logos */}
                        <div style={{width:'60%', position:'relative', transform:'translateX(10%)'}}>
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
                            Ready to <br /> Innovate with us?
                        </p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', margin:'2em 0 0 0'}}>
                        <div style={{display:'flex', alignItems:'center', margin:'0 4em 0 0'}}>
                            <div style={{padding:'1.36em 3em 1.36em 3em', borderBottomLeftRadius:'0.6em', borderTopLeftRadius:'0.6em', background:'#EEEEEA'}}><p style={{fontSize:'1em'}}>Get in touch</p></div>
                            <div style={{background:'#D1BD55', padding:'0.66em', borderTopRightRadius:'0.6em', borderBottomRightRadius:'0.6em'}}> 
                                <div style={{borderRadius:'50%', height:'2.5em', width:'2.5em', background:'#322712', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <img style={{width:'40%', height:'40%', objectFit:'contain'}} src="/Products/arrow.svg" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div style={{border:'1px rgba(50, 39, 18, 0.33) solid', display:'flex', alignItems:'center', padding:'0.4em 1em', borderRadius:'0.6em'}}>
                            <div style={{height:'3em', width:'3em'}}><img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/purchaseBCoot.png" alt="image" /></div>
                            <div><p>Purchase Bandicoot</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}