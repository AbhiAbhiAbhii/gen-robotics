/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
export default function Hero({ slice }){

  //data - prismic

  let title = `${ slice.primary.title[0].text }`;   

  // let src = `${ slice.primary.hero_video.embed_url }`

  // let type = `${ slice.primary.hero_video.type}`

  // refs
  const titleRef = useRef();
  const arrowRef = useRef();
  const descriptRef = useRef();

  const miniVidRef = useRef();
  const playBtnRef = useRef();


  useEffect(() => {

    let target = document.getElementById("observing");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {

          titleRef.current.style.transform = 'translateY(0%)'; // main title

          setTimeout(() => { // arrow and scroll text
            arrowRef.current.style.transform = 'translateY(0%)';
            descriptRef.current.style.transform = 'translateY(0%)'
          }, 2200)

          setTimeout(() => {
            document.getElementById("heroContainer").className = "heroContainer_AnimatedBorder"; // borderLine
          }, 1000)

          // Mini Video Grow
          setTimeout(() => {
            miniVidRef.current.style.transform = 'translateX(0%)';
          }, 2000)
          // play btn anim bottom to top
          setTimeout(() => {
            playBtnRef.current.style.top = '50%';
            playBtnRef.current.style.opacity = '1';
          }, 3000)

        }
      })
    })
    observer.observe(target);
  })


  return(
    <>
      <main id="observing" className='hero ag-reg'>
        <video autoPlay="true" muted="true" loop="true" playsInline="true" height="100%" width="100%" style={{position:'absolute', top:'0', left:'0', height:'100%', width: '100%', objectFit:'cover'}}>
            <source src='/heroVideo.mp4'  type="video/mp4" />
            <source src='/heroVideo.webm'  type="video/webm" />                
            {/* <source src={src} type={type} style={{border:'1px red solid'}} /> */}
        </video>
        <div id="heroContainer" className='heroContainer'>
          <div className='heroTextContainer' style={{color:'#FFF'}}>
            <div className='heroTitle' style={{ overflow:'hidden'}}>  
                <p ref={titleRef} style={{transition:'all 2.6s cubic-bezier(0.85, 0, 0.15, 1)', transform:'translateY(100%)'}}> {/* QUINT BIG TEXT */}
                  { title }
                </p>
            </div>
            <div className='heroScrollText' style={{overflow:'hidden'}}>
              <span ref={arrowRef} style={{height:'1rem', width:'1.1rem', marginRight:'0.5rem', transform:'translateY(-120%)', transition:'all 1.2s cubic-bezier(0.76, 0.00, 0.24, 1.00)'}}> 
                  <img 
                    style={{height:'100%', width:'100%',
                    objectFit:'contain'}} 
                    src='/heroArrow.svg' alt='arrow' 
                  />
              </span>
              <p ref={descriptRef} style={{transform:'translateY(100%)', transition: 'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                SCROLL TO EXPLORE
              </p>
            </div>
          </div>
          <div className='heroMiniVideoContainer' style={{overflow:'hidden'}}>
            <div className='miniVideoDiv' ref={miniVidRef} style={{transform:'translateX(-100%)', transition:'all 1.6s cubic-bezier(0.76, 0.00, 0.24, 1.00)'}}>
              <img style={{height:'100%', width:'100%', objectFit:'cover'}} src='/tinyImg.svg' alt='img' />
              <div className='playBtn' ref={playBtnRef} style={{top:'120%', opacity:'0', transition:'all 1s cubic-bezier(0.76, 0.00, 0.24, 1.00)'}}>
                  <img 
                  style={{height:'100%', width:'100%', objectFit:'contain'}} 
                  src='/playBtn.svg' alt='playBtn' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )

}
