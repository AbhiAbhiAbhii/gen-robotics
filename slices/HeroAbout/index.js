/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
// import CountUp, { useCountUp } from 'react-countup';



/**
 * @typedef {import("@prismicio/client").Content.HeroAboutSlice} HeroAboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroAboutSlice>} HeroAboutProps
 * @param {HeroAboutProps}
 */
export default function HeroAbout({ slice }){



  const statARef = useRef();


  // data - prismic

  let title = `${ slice.primary.title[0].text }`;
  let description = `${ slice.primary.description[0].text }`;

  let statA = `${ slice.primary.stats_a[0].text }`;


  let statADescription = `${ slice.primary.stats_a_description[0].text }`;

  let statB = `${ slice.primary.stats_b[0].text }`;
  let statBDescription = `${ slice.primary.stats_b_description[0].text }`;

  let statC = `${ slice.primary.stats_c[0].text }`;
  let statCDescription = `${ slice.primary.stats_c_description[0].text }`;

  // refs
  const titleRef = useRef();
  const descriptARef = useRef();

  const statDescARef = useRef();

  const statBRef = useRef();
  const statDescBRef = useRef();

  const statCRef = useRef();
  const statDescCRef = useRef();

  // statA
  const [visibleStat, setVisibleStat] = useState(false)
  const [countStatA, setCountStatA] = useState(0)

  // statB
  const [countStatB, setCountStatB] = useState(0)
  
  // statC
  const [countStatC, setCountStatC] = useState(0)
  


  useEffect(() => {

    let target = document.getElementById("observingB");

    // increment count
    let counter = countStatA;

    let counterB = countStatB;

    let counterC = countStatC;


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {

              setTimeout(() => {
                titleRef.current.style.transform = 'translateY(0)';
              }, 200)
              setTimeout(() => {
                descriptARef.current.style.transform = 'translateY(0)';
              },600)
              setTimeout(() => {     
                statARef.current.style.transform = 'translateY(0)';
              }, 800)
              setTimeout(() => {
                  statDescARef.current.style.transform = 'translateY(0)';
                }, 1000)
                setTimeout(() => {
                statBRef.current.style.transform = 'translateY(0)';
              }, 1200)
                setTimeout(() => {
                statDescBRef.current.style.transform = 'translateY(0)';
              }, 1400)
              setTimeout(() => {
                statCRef.current.style.transform = 'translateY(0)';
              }, 1600)
                setTimeout(() => {
                statDescCRef.current.style.transform = 'translateY(0)';
              }, 1800)

              // Increment count
              // Stat A

              setTimeout(() => {
                setVisibleStat(true)
              }, 2000)
            }  
        })
      })
      observer.observe(target);

      // Stat Increment
      if(visibleStat == true) {
        setTimeout(() => {
          for(counter = countStatA; counter < statA ; counter++) {
            setCountStatA(countStatA +1) 
          }
        }, 20)

        setTimeout(() => {
          for(counterB = countStatB; counterB < statB ; counterB++) {
            setCountStatB(countStatB + 100) 
          }
        }, 30)

        setTimeout(() => {
          for(counterC = countStatC; counterC < statC ; counterC++) {
            setCountStatC(countStatC + 10) 
          }
        }, 40)
      }

  })


 

 



  return(
    <>
      <section className='heroAbout' id='heroabout'>
        <div className='heroAbout_Container'>
          <div className='heroAbout_Content'>
            <div className='heroAbout_ContentA'>
              <div id='observingB' className='heroAbout_Title' style={{overflow:'hidden'}}>
                  <p ref={titleRef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                    { title }
                  </p>
              </div>
              <div className='heroAbout_Description' style={{overflow:'hidden'}}>
                  <p ref={descriptARef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                    { description }
                  </p>
              </div>
            </div>
            <div className='heroAbout_ContentB'>

              <div className='heroAbout_StatsContainer'>
                  <div className='heroAbout_Stats' style={{overflow:'hidden'}}>
                    <p className='counterA' ref={statARef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      {
                        countStatA
                      }
                    </p>
                  </div>
                  <div className='heroAbout_StatsDescription' style={{overflow:'hidden'}}>
                    <p ref={statDescARef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statADescription }
                    </p>
                  </div>
              </div>

              <div className='heroAbout_StatsContainer'>
                  <div className='heroAbout_Stats' style={{overflow: 'hidden'}}>
                    <p ref={statBRef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      {
                        countStatB 
                      }+
                    </p>
                  </div>
                  <div className='heroAbout_StatsDescription' style={{overflow: 'hidden'}}>
                    <p ref={statDescBRef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statBDescription }
                    </p>
                  </div>
              </div>
              {/* NEW CONTENT- CONNECT WITH PRISMIC LATER */}
              <div className='heroAbout_StatsContainer'>
                  <div className='heroAbout_Stats' style={{overflow: 'hidden'}}>
                    <p ref={statCRef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                    {
                      countStatC
                    }+
                    </p>
                  </div>
                  <div className='heroAbout_StatsDescription' style={{overflow: 'hidden'}}>
                    <p ref={statDescCRef} style={{transform:'translateY(100%)', transition:'all 1s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statCDescription }
                    </p>
                  </div>
              </div>
              {/*  */}
            </div>
            {/* IMG-SEQ TITLE */}
            <div className="bandicoot_TitleContainer" style={{zIndex:'100'}}>
              <div className="bandicoot_Title">
                <p>
                  Introducing
                </p>
              </div>
              <div className="bandicoot_Bandicoot">
                {/* <p>
                  Bandicoot
                </p> */}
                <div className='bandicoot_Logo'>
                  <img 
                    style={{height:'100%', width:'100%', objectFit:'contain'}} 
                    src='/imgsequence/introBandicoot.svg' alt='logo' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
