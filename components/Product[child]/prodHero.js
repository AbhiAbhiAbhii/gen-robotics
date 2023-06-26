/* eslint-disable @next/next/no-img-element */


export default function ProductHero(){
    let eyebrow = "BANDICOOT"
    // let productTitle = "Making the  safer than ever"
    let productTitle = "Manhole cleaning safer than ever"

    return(
        <section className="product">   
            <div className="product_HeroImg">
                <video autoPlay="true" muted="true" loop="true" playsInline="true" height="100%" width="100%" style={{ height:'100%', width: '100%', objectFit:'cover'}}>
                    <source src='/Products/BandicootRevealHeroVid.mp4'  type="video/mp4" />
                </video>
            </div>
            <div className="product_Container">
                <div className="product_Title_Container">
                    {/* <div className="product_Eyebrow">
                        <p>
                            { eyebrow }
                        </p>
                    </div> */}
                    <div className="product_Title">
                        <p>
                            { productTitle }
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}