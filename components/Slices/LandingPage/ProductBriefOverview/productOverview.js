import { useEffect, useRef, useState } from 'react'


export default function ProductOverview() {

    const animRef = useRef();
    const descriptA = useRef();
    const blockA = useRef();
    const blockB = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    console.log('intersecting')
                    setTimeout(() => {
                    animRef.current.style.opacity = '1';
                    }, 500)
                    setTimeout(() => {
                    descriptA.current.style.opacity = '1';
                    },1000)
                    setTimeout(() => {
                    blockA.current.style.opacity = '1';
                    }, 1500)
                    setTimeout(() => {
                    blockB.current.style.opacity = '1';
                    },2000)
                }
            })
          })
      
          observer.observe(document.getElementById("animRef"))
    })

    return(
        <section className='showCaseText'>
            <div className='showCaseTextContainer'>
                <div className='MAIN' style={{}}>
                    <div className='A' style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', padding:'4rem 0'}}>
                    <div id='animRef' ref={animRef}  className='showCaseTextA' style={{width:'48%', fontSize:'2.6rem', lineHeight:'120%', opacity:'0', transition:'all 4s ease'}}>
                        <p>Engineered for Cleaning any type of sewer manholes.</p>
                    </div>
                    <div className='showCaseTextB' ref={descriptA} style={{width:'50%', color:'#666666', fontSize:'1.6rem', lineHeight:'120%', opacity:'0', transition:'all 3s ease'}}>
                        <p>
                            The bandicoot is a specialized robot designed to clean sewer manholes of any kind. With its advanced engineering, it can clean manholes efficiently and effectively and provide safety for the workers
                        </p>
                    </div>
                    </div>
                    <div className='B' style={{display:'flex', alignItems:'center', justifyContent:'flex-end', padding:'4rem 0'}}>

                        <div ref={blockA} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', textAlign:'left', marginRight:'10rem', opacity:'0', transition:'all 3s ease'}}>
                            <div style={{fontSize:'7rem', display:'flex', alignItems:'flex-start'}}><p>125kg</p></div>
                            <div style={{fontSize:'1.2rem',  padding:'0 0 0 2%'}}><p>Lifting capacity</p></div>
                        </div>

                        <div ref={blockB} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', opacity:'0', transition:'all 3s ease'}}>
                            <div style={{fontSize:'7rem'}}><p>10m</p></div>
                            <div style={{fontSize:'1.2rem', padding:'0 0 0 2%'}}><p>Diving capacity</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}