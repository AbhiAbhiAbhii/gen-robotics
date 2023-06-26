/* eslint-disable @next/next/no-img-element */

import CTA from "./CTAComponent"


export default function InnovateV2(){

    let Subtitle = "Genrobotics, the leading Robotics company in India, primarily focusing on designing and development of Robotic."
    // let ArrowBg = "#322712"

    return(
        <>
        <section className="Innovate">
            <div className="Innovate_Container">
                <div className="Innovate_Wrapper">  
                    <div className="Innovate_AssetLeft">
                        <img src="/About/assetLeft.svg" alt="img" />
                    </div>
                    <div className="Innovate_TextContainer">
                        <div className="Innovate_Title">
                            <p>
                                Ready to <br />Innovate with us?
                            </p>
                        </div>
                        <div className="Innovate_Subtitle">
                            <p>
                                {Subtitle}
                            </p>
                        </div>
                        <CTA width="14em" widthB="6em" height="2em" margin="1em 0 0 0" bg="#FFF" />
                    </div>
                    <div className="Innovate_AssetRight">
                        <img src="/About/assetRight.svg" alt="img" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}