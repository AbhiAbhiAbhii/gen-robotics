/* eslint-disable @next/next/no-img-element */

import Image from "next/image"


export default function FeaturesScale({ FTitleA, FTitleB}){

    let featShowcase = [
        {
            index: '01',
            title: 'More Reachablilty To Every Corner',
            description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each leg, creating more reachability and 100% efficiency.',
            src: '/Products/moreReachability.svg'
        },
        {
            index: '02',
            title: 'Precise and Surgical Cleaning',
            description: "Powerful Precision: Bandicoot's Extendable Robotic Arm for Surgical Cleaning with Picking, Grabbing, and Shovelling Abilities",
            src: '/Products/precise.svg'
        },
        {
            index: '03',
            title: 'More Grabbing Area',
            description: "Bandicoot comes with the combination of expandable bucket system and robotic arm that can move to all the corners, enabling more grabbing area, resulting in 100% efficient cleaning.",
            src: '/Products/moreGrabbingArea.svg'
        },
        {
            index: '04',
            title: 'Compact Design for Portability',
            description: "Bandicoot is the only solution that is portable and easy to manoeuvre in urban, gully regions and narrow roads, creating zero traffic congestion, making it the most accessible robotic scavenger in the world.",
            src: '/Products/compactDesign.svg'
        },
    ]

    return(
        <>
        <section className="featureScale" style={{margin:'8em 0'}}>
            <div className="featureScale_Container">
                <div className="featureScale_TitleContainer">
                    <div className="featureScale_Title">
                        <p>
                            {/* Introducing, <br />Features that scale. */}
                            {FTitleA}<br /><span>{FTitleB}</span>
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
                                                <img src={data.src} alt="asset" />
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