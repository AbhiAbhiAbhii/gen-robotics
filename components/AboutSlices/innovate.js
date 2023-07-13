/* eslint-disable @next/next/no-img-element */
import CTA from "../CTAComponent"


export default function Innovate({ context }){

    let Subtitle = "Genrobotics, the leading Robotics company in India, primarily focusing on designing and development of Robotic."

    let background = "#242423"

    return(
        <>
        <section className="Innovate" style={{background: context === "news_room_page" ? 'none': `${ background }`}}>
            <div className="Innovate_Container">
                 {/* Mob */}
                 <div className="Innovate_TextContainer MobText">
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
                    <CTA classNameA="CTA_Innovate_A" classNameB="CTA_Innovate_B" margin="1em 0 0 0" bg="#FFF" />
                </div>
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
                        <CTA classNameA="CTA_Innovate_A" classNameB="CTA_Innovate_B" margin="1em 0 0 0" bg="#FFF" />
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