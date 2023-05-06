/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'



export default function BandicootShowcase() {

    const bandiCootRef = useRef();

    useEffect(() => {
        const observerB = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.isIntersecting) {
                bandiCootRef.current.style.opacity = '1';
              }
            })
          },{threshold:0.3})
        observerB.observe(document.getElementById("genro"))
    })


    return(
        <section className='showCaseDummy' style={{padding:'2rem 0'}}>
            <div className='showCaseDummyContainer' style={{padding:'2rem 0'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div ref={bandiCootRef} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 4rem 4rem 4rem', transition:'all 2s ease', opacity:'0'}}>
                    <div style={{fontSize:'1rem'}}><p>Introducing</p></div>
                    <div style={{fontSize:'7rem'}}><p>Bandicoot 2.0</p></div>
                    </div>
                    <div className='genroDummy' id='genro' style={{ height:'61rem', width:'100%'}}>
                    <img style={{height:'100%', width:"100%", objectFit:'cover'}} src='/showCaseDummy.svg' alt='' />
                    </div>
                </div>
            </div>
      </section>
    )
}