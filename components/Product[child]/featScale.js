/* eslint-disable @next/next/no-img-element */

import Image from "next/image"


export default function FeaturesScale(){

    let featShowcase = [
        {
            index: '01',
            title: 'More Reachablilty To Every Corner',
            description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each leg, creating more reachability and 100% efficiency.',
            src: '/BluePrint/p-c.svg'
        },
        {
            index: '02',
            title: 'More Reachablilty To Every Corner',
            description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each leg, creating more reachability and 100% efficiency.',
            src: '/BluePrint/p-c.svg'
        },
        {
            index: '03',
            title: 'More Reachablilty To Every Corner',
            description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each leg, creating more reachability and 100% efficiency.',
            src: '/BluePrint/p-c.svg'
        },
        {
            index: '04',
            title: 'More Reachablilty To Every Corner',
            description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each leg, creating more reachability and 100% efficiency.',
            src: '/BluePrint/p-c.svg'
        },
    ]

    return(
        <>
        <section className="featureScale">
            <div className="featureScale_Container">
                <div className="featureScale_TitleContainer">
                    <div className="featureScale_Title">
                        <p>
                            Introducing, <br />Features that scale.
                        </p>
                    </div>
                </div>
                <div className="featureScale_Showcase">
                    <div className="featureScale_Showcase_Container">
                        {
                            featShowcase.map((data, i) => {
                                return(
                                    <div className="featureScale_Showcase_Item" key={i} style={{display:'flex', flexDirection: i % 2 == 0 ? 'row':'row-reverse', margin:'12em 0',}}>
                                        <div className="featureScale_Showcase_Item_TextContainer" style={{display:'flex', flexDirection:'column', position:'relative', transform: i % 2 == 0 ? '':'translateX(18%)'}}>
                                            <div className="featureScale_Showcase_Item_Index">
                                                <p>
                                                    { data.index }
                                                </p>
                                            </div>
                                            <div className="featureScale_Showcase_Item_Title">
                                                <p>
                                                    { data.title }
                                                </p>
                                            </div>
                                            <div className="featureScale_Showcase_Item_Desc">
                                                <p>
                                                    { data.description }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featureScale_Showcase_Item_AssetContainer" style={{justifyContent: i % 2 == 0 ? 'flex-end':'flex-start'}}>
                                            <div className="featureScale_Showcase_Item_AssetBg">
                                                <Image height={100} width={100} src={data.src} alt="asset" />
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
        </>
    )
}