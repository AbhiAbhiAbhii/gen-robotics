/* eslint-disable @next/next/no-img-element */


export default function ProductHero(){
    let eyebrow = "BANDICOOT"
    // let productTitle = "Making the  safer than ever"
    let productTitle = "Manhole cleaning safer than ever"

    return(
        <section className="product">   
            <div className="product_Container">
                <div className="product_Title_Container">
                    <div className="product_Eyebrow">
                        <p>
                            { eyebrow }
                        </p>
                    </div>
                    <div className="product_Title">
                        <p>
                            { productTitle }
                        </p>
                    </div>
                </div>
                <div className="product_HeroImg">
                    <img src={'/Products/bCoot_Hero.png'} alt="heroImage" />
                </div>
            </div>
        </section>
    )
}