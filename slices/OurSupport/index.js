/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

/**
 * @typedef {import("@prismicio/client").Content.OurSupportSlice} OurSupportSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurSupportSlice>} OurSupportProps
 * @param {OurSupportProps}
 */
export default function OurSupport({ slice }){

  //states
  const [modi, setModi] = useState(0);

  // data - prismic
  let title = `${ slice.primary.title[0].text }`;
  let description = `${ slice.primary.description[0].text }`;

  let newsDate = `${ slice.primary.news_date[0].text }`;
  let newsTitle = `${ slice.primary.title[0].text }`;
  let newsDescription = `${ slice.primary.description[0].text }`;

  // refs
  const titleRef = useRef();
  const descriptRef = useRef();

  const dateRef = useRef();
  const newsTitleRef = useRef();
  const newsDescripRef = useRef();



  useEffect(() => {

    // first-observer
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              titleRef.current.style.transform = 'translateY(0%)'; // anim for title

              let logo = document.querySelector(".support_LogoShowcase_Container"); // instance of the logo-showcase
              setTimeout(() => {
                descriptRef.current.style.transform = 'translateY(0%)'; // anim for description

                logo.style.opacity = '1'; // anim for logo-showcase
              },500)
              
            }
          })
        }, {threshold:0.2})
      observer.observe(document.getElementById("Launch"));

    //second-observer
    const observerB = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                dateRef.current.style.transform = 'translateY(0%)'; // anim for date

                setTimeout(() => {
                    newsTitleRef.current.style.transform = 'translateY(0%)'; // anim for news-title
                }, 500);
                
                setTimeout(() => {
                    newsDescripRef.current.style.transform = 'translateY(0%)'; // anim for news-description
                }, 1000);
            }
        })
    })
    observerB.observe(document.getElementById("modi"));
    
  }, [])

  let tempTitle = "Supported By"

  return(
    <section className="support" id='Launch'>
            <div className='support_Container'>
                <div className='support_Text_Container'>
                    <div className='support_Title_Div' 
                        style={{ overflow:'hidden'}}>
                        <p ref={titleRef} style={{transform:'translateY(110%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                            {/* { title } */}
                            { tempTitle}
                        </p>
                    </div>
                    <div className='support_Description_Div'
                        style={{overflow:'hidden'}}>
                        <p ref={descriptRef} style={{transform:'translateY(110%)', transition:'all 1.2s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                            { description }
                        </p>
                    </div>
                </div>

                {/* logo showcase */}
                <div className='support_LogoShowcase_Container' style={{opacity:'0', transition:'all 1.2s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                    <div className='support_LogoShowcase_Container_Inner'>
                    {
                        slice.items.map((data, i) => {
                        return(
                            <div className='support_Logo_Item' key={i}>
                                <img 
                                    style={{height:'100%', width:'100%', objectFit:'contain'}} 
                                    src={data.logo.url} 
                                    alt={data.logo.alt} />
                            </div>
                        )
                        })
                    }
                    </div>
                </div>

            </div>
                
            {/* supporters showcase */}
            <div className='support_Supporters_Container' >
                <div className='support_Supporters_Showcase'>
                    {
                    slice.items.map((data, i) => {
                        return(
                        <div className='support_Supporters_ImgContainer' key={i} 
                            style={{display: data.image.url == null ? 'none' : 'flex', flexDirection:'column', justifyContent:'center'}}> {/* image-container */}
                            <div onClick={() => setModi(i)} style={{ width: i == modi ? '30em':'20.3em', height:'30.6em', margin:'0 1em', cursor:'pointer', transition:'all 0.6s ease'}} key={i}> {/* image */} 
                                <img 
                                    style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.6rem'}} 
                                    src={data.image.url} 
                                    alt={data.image.alt} 
                                />
                            </div> 
                        </div>
                        )
                    })
                    }
                </div>
                <div className='support_News' id='modi'>
                    <div className='support_News_Container'>
                        {/* news */}
                        <div className='support_News_Div'>
                            <div className='support_News_DateDiv' style={{overflow:'hidden'}}>
                                <p ref={dateRef} style={{transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)', transform:'translateY(120%)'}}>
                                    { newsDate }
                                </p>
                            </div>
                            <div className='support_News_TitleDiv' style={{overflow:'hidden'}}>
                                <p ref={newsTitleRef} style={{transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)', transform:'translateY(120%)'}}>
                                    { newsTitle }
                                </p>
                            </div>
                            <div className='support_News_DescriptionDiv' style={{overflow:'hidden'}}>
                                <p ref={newsDescripRef} style={{transition:'all 0.8s cubic-bezier(0.85, 0, 0.15, 1)', transform:'translateY(130%)'}}>
                                    { newsDescription }
                                </p>
                            </div>
                            <div className='support_News_Read_Container'>
                                <div className='support_News_ReadDiv'>
                                    <p>
                                        Read more
                                    </p>
                                </div>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'1.6rem', width:'1.6rem', borderRadius:'20rem', background:'#4D3300'}}>
                                    <img style={{height:'50%', width:'50%', objectFit:'contain'}} src='/solutions/arrow.svg' alt='arrow' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
  )
}
