/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
// import CountUp, { useCountUp } from 'react-countup';



/**
 * @typedef {import("@prismicio/client").Content.HeroAboutSlice} HeroAboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroAboutSlice>} HeroAboutProps
 * @param {HeroAboutProps}
 */
export default function HeroAbout({ slice }){



  // const countUpRef = React.useRef(null)
  const statARef = useRef();

  // const { start, pauseResume, reset, update } = useCountUp({
  //   ref: countUpRef,
  //   start: 0,
  //   end: 19,
  //   delay: 1000,
  //   duration: 4,
  //   onReset: () => console.log('Resetted!'),
  //   onUpdate: () => console.log('Updated!'),
  //   onPauseResume: () => console.log('Paused or resumed!'),
  //   onStart: ({ pauseResume }) => console.log(pauseResume),
  //   onEnd: ({ pauseResume }) => console.log(pauseResume),
  // });

  // console.log(useCountUp,"UseCOUNT")


  // Incrementing Count
  // const [count, setCount ] = useState("0")

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

  const statDescARef = useRef();

  const statBRef = useRef();
  const statDescBRef = useRef();

  const statCRef = useRef();
  const statDescCRef = useRef();

  // let Count = <CountUp start={0} end={30} duration={4} /> ;
  const [visible, setVisible] = useState(true)
  // let Coun = Count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");



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
                setTimeout(() => {
                  statCRef.current.style.transform = 'translateY(0)';
                }, 2500)
                 setTimeout(() => {
                  statDescCRef.current.style.transform = 'translateY(0)';
                }, 2800)

                setTimeout(() => {
                  setVisible(false)
                }, 3500)
              }
          })
        })
        observer.observe(target);
  })


  return(
    <>
      <section className='heroAbout' id='heroabout'>

      {/* <div>
      <div ref={countUpRef} />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div> */}
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
                    {/* {
                      visible ? 
                        <p ref={statARef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>0</p> 
                        :
                        <p ref={statARef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                          <CountUp start={0} end={19} duration={4} />
                        </p>

                    } */}
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
                    {/* {
                      visible ? 
                        <p ref={statBRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>0+</p> 
                        :
                        <p ref={statBRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                          <CountUp start={0} end={3000} duration={2} />+
                        </p>

                    } */}
                  </div>
                  <div className='heroAbout_StatsDescription' style={{overflow: 'hidden'}}>
                    <p ref={statDescBRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      { statBDescription }
                    </p>
                  </div>
              </div>
              {/* NEW CONTENT- CONNECT WITH PRISMIC LATER */}
              <div className='heroAbout_StatsContainer'>
                  <div className='heroAbout_Stats' style={{overflow: 'hidden'}}>
                    <p ref={statCRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                    {/* {
                      visible ? "0+" : <CountUp start={0} end={30} duration={2} /> 
                    } */}
                    {/* {
                      visible ? 
                        <p ref={statCRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>0+</p> 
                        :
                        <p ref={statCRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                          <CountUp start={0} end={30} duration={2.5} />+
                        </p>

                    } */}300+
                    </p>
                  </div>
                  <div className='heroAbout_StatsDescription' style={{overflow: 'hidden'}}>
                    <p ref={statDescCRef} style={{transform:'translateY(100%)', transition:'all 1.6s cubic-bezier(0.85, 0, 0.15, 1)'}}>
                      Robots
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
                <div style={{ height:'10em',width:'40em', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <img style={{height:'100%', width:'100%', objectFit:'contain'}} src='/imgsequence/introBandicoot.svg' alt='logo' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
