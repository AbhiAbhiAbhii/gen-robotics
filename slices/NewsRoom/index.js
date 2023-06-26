import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.NewsRoomSlice} NewsRoomSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsRoomSlice>} NewsRoomProps
 * @param {NewsRoomProps}
 */
export default function NewsRoom({slice}){

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return(
    <section className="news">
      <div className="news_Container">
        <div className="news_Text_Container">
          <div className="news_Title">
            <h1>
              <PrismicRichText field={slice.primary.title} />
            </h1>
          </div>
          <div className="news_Description">
            <p>
              <PrismicRichText field={slice.primary.description} />
            </p>
          </div>
        </div>
      </div>
      <div className="news_Articles_Container" style={{height:'fit-content'}}> 
        <Swiper className="mySwiper" 
          style={{
            cursor:'grab',
            scrollSnapType:'x mandatory', 
            padding:'0 0 2em 0', 
            "--swiper-pagination-bullet-horizontal-gap":"0.6em", 
            "--swiper-pagination-bullet-inactive-color":"none"
          }}
          slidesPerView={3}
          grid={{
            rows:2,
            fill:"row",
          }}
          slidesPerGroup={6}
          pagination={pagination}
          modules={[Grid, Pagination]} 
        >
        {
          slice.items.map((data , i) =>  {

            console.log(data,"get my link")

            let myLink = data.news_link.url;

            return(
              <SwiperSlide style={{height:'auto'}}  key={i}>
                <a href={myLink} target="_blank" style={{ display:'flex', alignItems:'center', justifyContent:'center' }} key={i}>
                  <div className="news_Article_Item">
                    <div className="news_Article_Image">
                      <PrismicNextImage 
                        style={{
                          height:'100%', 
                          width:'100%', 
                          borderTopLeftRadius:'0.3em', 
                          borderTopRightRadius:'0.3em', 
                          objectFit:'cover'
                        }} field={data.news_image} alt={data.news_image.alt} />
                    </div>
                    <div className="news_Article_Description">
                      <p>
                        <PrismicRichText field={data.news_description} />
                      </p>
                    </div>
                    <div className="news_Article_Bottom">
                      <div className="news_Article_Bottom_Left">
                        <p>
                          <PrismicRichText field={data.date} />
                        </p>
                      </div>
                      <div className="news_Article_Bottom_Right">
                        <p>
                          <PrismicRichText field={data.source} />
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
        
      </div>
    </section>
  )
}
