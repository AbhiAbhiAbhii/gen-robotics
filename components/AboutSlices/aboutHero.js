/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Arrow from "../Arrow/arrow";


export default function AboutHero(){

    //Components
    let fill = "#FFAC05"
    let ArrowBg = "#322712"

    //About hero
    let Title = "Making the world safer than ever";
    let Subtitle = "Continuous Innovation at the core for developing tailor-made robotic technologies that ensure safety and empowerment to uplift the lives of people."

    let src = '/About/AboutHero/aboutHeroImg.png';
    let alt = 'GENROBOTICS'

    //OFFSET SECTION
    let MainText = "We are working on developing tech assuring safety to the ones who face the extremities"
    let ContentADescript = "Genrobotics, the leading Robotics company in India, primarily focusing on designing and development of Robotic solutions to address the most relevant social issues, is headquartered in Trivandrum, Kerala."
    let ContentABrDescript = "The Company was founded in 2017."

    let srcB = "/About/gTouchArrow.svg";
    let srcC = '/About/dummyImg.png';

    let BottomText = "Developing tailor-made products and services have keen importance in a Nation’s prospering progression. It’s a great honour to be a part of India’s most prestigious initiatives “Swachh Bharat Abhiyan and MakeInIndia”."

    return(
        <>
        <main className="aboutHero">
            <div className="aboutHero_Container">
                <div className="aboutHero_TextContainer">
                    <div className="aboutHero_Title">
                        <p>
                            { Title }
                        </p>
                    </div>
                    <div className="aboutHero_Subtitle">
                        <p>
                            { Subtitle }
                        </p>
                    </div>
                </div>
                <div className="aboutHero_ImgContainer">
                    <div className="aboutHero_Img">
                        <Image height={100} width={100} src={src} alt={alt} />
                    </div>
                </div>
            </div>
            {/* offsetSection */}
            <div className="aboutInfo">
                <div className="aboutInfo_Container">
                    <div className="aboutInfo_MainTextContainer">
                        <div className="aboutInfo_MainText">
                            <p>
                                { MainText }
                            </p>
                        </div>
                    </div>
                    <div className="aboutInfo_ContentContainer">
                        <div className="aboutInfo_ContentA">
                            <div className="aboutInfo_ContentA_Descript">
                                <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                { ContentADescript } <br /> <br /> { ContentABrDescript }
                                </p>
                            </div>
                            <div className="aboutInfo_GetTouchContainer">
                                <div style={{display:'flex'}}>
                                    <input type="text" placeholder="Get in touch" style={{padding:'0.5em 2em', border:'none', outline:'none', borderTopLeftRadius:'0.625em', borderBottomLeftRadius:'0.625em'}} />
                                    <div className="GetinTouchBtn">
                                        <div className="arrowContainer" style={{background: ArrowBg}}>
                                            <img src={ srcB } alt="arrow" />
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutInfo_ContentB">
                            <div className="aboutInfo_ContentBImg">
                                <img src={srcC} alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutInfo_BottomContainer">
                    <div className="aboutInfo_BottomText">
                        <p>
                            { BottomText }
                        </p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}