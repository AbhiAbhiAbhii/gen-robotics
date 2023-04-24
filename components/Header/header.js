/* eslint-disable @next/next/no-img-element */


export default function Header() {
    return(
        <>
        <nav style={{position:'fixed', top:'2%', background:'none', padding:'1rem', width:'100%'}}>
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