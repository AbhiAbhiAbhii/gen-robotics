/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react"


export default function Header() {

    const navRef = useRef();

    useEffect(() => {

        window.onscroll = () => {
            if(window.scrollY > 6){
                navRef.current.style.backgroundColor = 'rgba(70, 70, 70, 0.8)';
                navRef.current.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                navRef.current.style.backdropFilter = 'blur(15.2px)';
                navRef.current.style.WebkitBackdropFilter = 'blur(15.2px)';
            }
            else{
                navRef.current.style.backgroundColor = 'transparent';
                navRef.current.style.backdropFilter = 'none';
                navRef.current.style.boxShadow = 'none';
                navRef.current.style.filter = 'none';
                navRef.current.style.border = 'none';
            }

        }
    })

    return(
        <>
        <nav ref={navRef} className="nav" style={{position:'fixed' , top:'4%', left:'50%', transform:'translate(-50%,0)', padding:'1rem 2rem', width:'90%', zIndex:'9000000', transition:'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)', borderRadius:'0.8rem'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div style={{height:'2.8rem', width:'2.8rem', marginRight:'1.4rem'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/hmbgrDummy.svg" alt="img" />
                    </div>
                    <div style={{color:'#FFF'}}><p>Menu</p></div>
                </div>
                <div>
                    <img src="/logoGenRobo.svg" alt="logo" />
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <button className="btn" style={{color:'#FFF', border:'1px #FFF solid', padding:'0.8rem 2.4rem', borderRadius:'20rem'}}>Talk to us</button>
                </div>
            </div>
        </nav>
        </>
    )
}