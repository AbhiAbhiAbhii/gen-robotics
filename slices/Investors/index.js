/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from "@prismicio/react"

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

/**
 * @typedef {import("@prismicio/client").Content.InvestorsSlice} InvestorsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InvestorsSlice>} InvestorsProps
 * @param {InvestorsProps}
 */
export default function Investors({slice}){

  let dummyData = [
    {
      src:'/About/Investors/sridhar.png',
      fullName: 'Sridhar Vembu',
      position: 'Chief Executive Officer',
      companyName: 'Zoho Corp'
    },
    {
      src:'/About/Investors/anand.png',
      fullName: 'Anand Mahendra',
      position: 'Chairman',
      companyName: 'Mahindra Group'
    },
    {
      src:'/About/Investors/RajanAnandhan.jpg',
      fullName: 'Rajan Anandan',
      position: 'Ex Vice President',
      companyName: 'Google'
    },
    {
      src:'/About/Investors/Unicorn India Ventures.svg',
      fullName: 'Unicorn India Ventures',
      position: 'Mumbai',
      companyName: 'INDIA'
    },
    {
      src:'/About/Investors/sea fund.svg',
      fullName: 'Sea Fund',
      position: 'Bangalore',
      companyName: 'INDIA'
    },
  ]

  let EyebrowTitle = <PrismicRichText field={slice.primary.title} />
  let EyebrowSubTitle = <PrismicRichText field={slice.primary.subtitle} />

  return(
    <>
    <section className="Investors">
      <div className="Investors_Container">
        <div className="Investors_Eyebrow">
          <div className="Investors_Eyebrow_Title">
            <p>
              { EyebrowTitle }
            </p>
          </div>
          <div className="Investors_Eyebrow_Subtitle">
            <p>
              { EyebrowSubTitle }
            </p>
          </div>
        </div>
        <div className="Investors_Showcase_Container">
          {/* Desktop Component */}
          <div className="Investors_Showcase" > 
            {
              dummyData.map((data, i) => {
                return(
                  <div className="Investors_Showcase_Item" key={i}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:"center"}}>
                      <div className="Investors_Showcase_Img">
                        <img src={ data.src } style={{objectFit: i == 3 ? 'contain': i == 4 ? 'contain':'cover'}} alt="img" />
                      </div>
                      <div className="Investors_Showcase_TextContainer">
                        <div className="Investors_Showcase_Fullname">
                          <p>
                            { data.fullName }
                          </p>
                        </div>
                        <div className="Investors_Showcase_Position">
                          <p>
                            { data.position }
                          </p>
                        </div>
                        <div className="Investors_Showcase_CompanyName">
                          <p>
                            { data.companyName }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {/* Desktop Component End */}

          {/* Mobile Component */}
            <div className="Investors_Showcase_Mob">
              <Swiper
                slidesPerView={2.4}
                spaceBetween={30}
                >
                {
                  dummyData.map((data, i) => {
                    return(
                      <SwiperSlide key={i}>
                          <div className="Investors_Showcase_Mob_Img">
                              <img src={data.src} 
                                  style={{objectFit: i == 3 ? 'contain': i == 4 ? 'contain':'cover'}} alt="Image" />
                          </div>
                          <div className="Investors_Showcase_Mob_Text_Container">
                            <div className="Investors_Showcase_Fullname">
                              <p>
                                { data.fullName }
                              </p>
                            </div>
                            <div className="Investors_Showcase_Position">
                              <p>
                                { data.position }
                              </p>
                            </div>
                            <div className="Investors_Showcase_CompanyName">
                              <p>
                                { data.companyName }
                              </p>
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
    </>
  )
}
