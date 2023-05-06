import { useEffect, useRef, useState } from 'react'


/**
 * @typedef {import("@prismicio/client").Content.HeroAboutSlice} HeroAboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroAboutSlice>} HeroAboutProps
 * @param {HeroAboutProps}
 */
export default function HeroAbout({ slice }){

  // data - prismic

  let title = `${ slice.primary.title[0].text }`;
  let description = `${ slice.primary.description[0].text }`;

  let statA = `${ slice.primary.stats_a[0].text }`;
  let statADescription = `${ slice.primary.stats_a_description[0].text }`;

  let statB = `${ slice.primary.stats_b[0].text }`;
  let statBDescription = `${ slice.primary.stats_b_description[0].text }`;

  // refs
  const titleRef = useRef();
  const descriptARef = useRef();

  const statARef = useRef();
  const statDescARef = useRef();

  const statBRef = useRef();
  const statDescBRef = useRef();

  useEffect(() => {

    let target = document.getElementById("observingB");

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                setTimeout(() => {
                  titleRef.current.style.transform = 'translateY(0)';
                }, 500)
                setTimeout(() => {
                  descriptARef.current.style.transform = 'translateY(0)';
                },1000)
                setTimeout(() => {
                  statARef.current.style.transform = 'translateY(0)';
                }, 1500)
                setTimeout(() => {
                   statDescARef.current.style.transform = 'translateY(0)';
                 }, 1800)
                 setTimeout(() => {
                  statBRef.current.style.transform = 'translateY(0)';
                }, 2000)
                 setTimeout(() => {
                  statDescBRef.current.style.transform = 'translateY(0)';
                }, 2200)
              }
          })
        })
        observer.observe(target);
  })


  return(
    <>
      <section className='heroAbout'>
        <div className='heroAbout_Container'>
          <div className='heroAbout_Content'>
            <div className='heroAbout_ContentA'>
              <div id='observingB' className='heroAbout_Title' style={{overflow:'hidden'}}>
                  <p ref={titleRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                    { title }
                  </p>
              </div>
              <div className='heroAbout_Description' style={{overflow:'hidden'}}>
                  <p ref={descriptARef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                    { description }
                  </p>
              </div>
            </div>
            <div className='heroAbout_ContentB'>

              <div className='heroAbout_StatsContainer'>
                  <div className='heroAbout_Stats' style={{overflow:'hidden'}}>
                    <p ref={statARef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statA }
                    </p>
                  </div>
                  <div className='heroAbout_StatsDescription' style={{overflow:'hidden'}}>
                    <p ref={statDescARef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statADescription }
                    </p>
                  </div>
              </div>

              <div className='heroAbout_StatsContainer'>
                  <div className='heroAbout_Stats' style={{overflow: 'hidden'}}>
                    <p ref={statBRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statB }
                    </p>
                  </div>
                  <div className='heroAbout_StatsDescription' style={{overflow: 'hidden'}}>
                    <p ref={statDescBRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statBDescription }
                    </p>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
