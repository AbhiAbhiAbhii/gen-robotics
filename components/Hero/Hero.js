/* eslint-disable @next/next/no-img-element */


export default function Hero() {
    return(
        <main className='hero' style={{position:'relative'}}>
            <video autoPlay="true" muted="true" loop="true" playsInline="true" height="100%" width="100%" style={{position:'absolute', top:'0', left:'0', height:'100%', width: '100%', objectFit:'cover'}}>
                <source src="/heroVideo.mp4"  type="video/mp4" />
                <source src="/heroVideo.webm"  type="video/webm" />                
            </video>
            <div className='heroContainer' style={{zIndex:'200000'}}>
                <div style={{color:'#FFF', width:'50%'}}>
                    {[{quote:"Bandicoot the world's first robotic scavenger."}].map((data,i) => {
                        return(
                            <div key={i} style={{fontSize:'5rem', lineHeight:'100%', letterSpacing:'-0.04em', padding:'1.2rem 0 4rem 0'}}>
                                <p>{data.quote}</p>
                            </div>
                        )
                    })}
                    <div style={{display:'flex', alignItems:'center'}}>
                    <span style={{height:'1rem', width:'1.1rem', marginRight:'0.5rem'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src='/heroArrow.svg' alt='arrow' />
                    </span>
                    <p style={{fontSize:'1rem'}}>SCROLL TO EXPLORE</p>
                    </div>
                </div>
                <div style={{width:'40%', display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
                    <div style={{height:'13.6rem', width:'21rem', position:'relative' }}>
                    <img style={{height:'100%', width:'100%', objectFit:'cover'}} src='/tinyImg.svg' alt='img' />
                    <div style={{height:'3.7rem', width:'3.7rem', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', cursor:'pointer'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src='/playBtn.svg' alt='playBtn' />
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}