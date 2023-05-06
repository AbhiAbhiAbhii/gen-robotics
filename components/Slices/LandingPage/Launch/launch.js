/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from 'react'



export default function Launch() {

    //states
    const [modi, setModi] = useState(0);

    //data
    let launchLogos = [
        {
        src: '/launch/GG[GandhiGlasses].svg'
        },
        {
        src: '/launch/Lion.svg'
        },
        {
        src:'/launch/swachh.svg'
        },
        {
        src:'/launch/smartCity.svg'
        }
    ]

    let imgData = [{src: '/launch/modi.svg'},{src: '/launch/imgB.svg'},{src: '/launch/imgC.svg'},]

    let textData= [
        {
        date: '2.10.2018',
        title:'The world’s first Robotic Scavenger',
        description:'The World’s First Robotic Scavenger designed to eliminate manual scavenging, was launched in the presence of Hon’ble Prime Minister, Shri Narendra Modi and U.N.Secretary-General Mr Antonio Guterres in the..'
        }
    ]

    const launchRef = useRef();
    const supportRef = useRef();

    useEffect(() => {
        const observerE = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting) {
                launchRef.current.style.opacity = '1';
                setTimeout(() => {
                  supportRef.current.style.opacity = '1';
                },1000)
              }
            })
          }, {threshold:0.2})
        observerE.observe(document.getElementById("Launch"))
      
    })

    return(
        <section className="Launch" id='Launch' style={{padding:'2rem'}}>
            <div className='LaunchContainer' style={{padding:'2rem 4rem'}}>
                <div className='textContainer' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <div className='launchedText' ref={launchRef} style={{fontSize:'8rem', letterSpacing:'-0.04em', textAlign:'center', width:'60%', lineHeight:'100%', padding:'2rem 0', opacity:'0', transition:'all 2s ease'}}><p>Launched & Supported by</p></div>
                    <div ref={supportRef} style={{fontSize:'1.6rem', width:'50%', textAlign:'center', color:'#020202', letterSpacing:'-0.02em', lineHeight:'160%', padding:'1rem 0', opacity:'0', transition:'all 2s ease'}}>
                    <p>Committed to deliver our solutions
                        to work with extreme and unsafe 
                        environments universally.
                    </p>
                    </div>
                </div>

                <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', margin:'6rem 0'}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'80%' }}>
                    {
                        launchLogos.map((data, i) => {
                        return(
                            <div style={{width:'20%', height:'4rem', display:'flex', justifyContent:'center', alignItems:'center'}} key={i}>
                            <img style={{height:'100%', width:'100%', objectFit:'contain'}} src={data.src} alt='logo' />
                            </div>
                        )
                        })
                    }
                    </div>
                </div>

            </div>

            <div className='dummyModi' style={{}}>
                <div style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    {
                    imgData.map((data, i) => {
                        return(
                        <div key={i} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}> {/* image-container */}
                            <div onClick={() => setModi(i)} style={{ width: i == modi ? '30rem':'20.3rem', height:'30.6rem', margin:'0 1rem', cursor:'pointer', transition:'all 1s ease'}} key={i}> {/* image */} 
                            <img style={{height:'100%', width:'100%', objectFit:'cover', borderRadius:'0.6rem'}} src={data.src} alt='img' />
                            </div> 
                        </div>
                        )
                    })
                    }
                </div>
                <div style={{padding:'2rem 4rem'}}>
                    <div style={{padding:'2rem 6rem'}}>
                        {
                            textData.map((textData, i) => {
                            return(
                                <div key={i}>
                                <div style={{color:'#000',fontSize:'0.6rem',fontWeight:'700'}}><p>{textData.date}</p></div>
                                <div style={{fontSize:'2.3rem', fontWeight:'700', padding:'0.4rem 0 1rem 0', width:'30%', lineHeight:'110%'}}><p>{textData.title}</p></div>
                                <div style={{fontSize:'0.8rem', width:'38%', lineHeight:'150%', padding:'0 0 1rem 0'}}><p>{textData.description}</p></div>
                                <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
                                <div style={{fontWeight:'600', margin:'0 1rem 0 0'}}><p>Read more</p></div>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'1.6rem', width:'1.6rem', borderRadius:'20rem', background:'#4D3300'}}>
                                    <img style={{height:'50%', width:'50%', objectFit:'contain'}} src='/solutions/arrow.svg' alt='arrow' />
                                </div>
                                </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
      </section>
    )
}