/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";

//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CTA from "../CTAComponent";
gsap.registerPlugin(ScrollTrigger)


export default function AboutHero(){

    // Transition
    let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
    let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

    let hide = 'translateY(100%)';
    let reveal = 'translateY(0%)';

    //Components
    let fill = "#FFAC05"
    let ArrowBg = "#322712"

    //About hero
    let Title = "Making the world safer than ever";
    let Subtitle = "Continuous Innovation at the core for developing tailor-made robotic technologies that ensure safety and empowerment to uplift the lives of people."



    let BottomText = "Genrobotics, the leading Robotics company in India, primarily focusing on designing and development of Robotic solutions to address the most relevant social issues, is headquartered in Trivandrum, Kerala. The Company was founded in 2017. For a long time, Robots are on board to transform our lives, we are inclined to think of ways to simplify life-risking situations and amplify livelihood through bringing the missing social space for Robots in our society. We are working on developing technologies assuring safety to the ones who face the extremities, through human-friendly robotic solutions. Developing tailor-made products and services have keen importance in a Nation’s prospering progression. It’s a great honour to be a part of India’s most prestigious initiatives “Swachh Bharat Abhiyan and MakeInIndia”. Our innovation “Bandicoot”- manhole cleaning robot, has been making transformative changes in many sanitation workers who were daring themselves every time without thinking of the extremities hidden in the manholes and ensuring cleanliness to all. We are spearheading the perseverance to create, develop and implement systems of change that are beneficial to all sentient beings and to the environment- by triggering off the distressed elements of the people and fostering a better place to live"

    // Animations

    // refs target
    const titleRef = useRef();
    const subtitleRef = useRef();

    
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {

                    titleRef.current.style.transform = reveal;

                    setTimeout(() => {
                        subtitleRef.current.style.transform = reveal;
                    }, 1000)
                }
            })
        })
        observer.observe(document.querySelector('.aboutHero'));
        //-----------------------------------------------------


        //gsap 
        gsap.to('.aboutInfo_ContentA', {
            scrollTrigger: {
                trigger: '.aboutInfo_ContentA',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                toggleActions: 'play none none reverse'
            },
            y: 230,
            duration: 2,
            ease: quart
        })

        gsap.to('.testRef', {
            scrollTrigger: {
                trigger: '.aboutInfo',
                start: 'top ',
                end: 'top',
            },
            y: 0,
        })

    }, []) 

    return(
        <>
        <main className="aboutHero">
            <div className="aboutHero_Container">
                <div className="aboutHero_TextContainer">
                    <div className="aboutHero_Title ofh">
                        <h1 ref={titleRef} style={{transform: hide, transition: `all 1s ${quart}`}}>
                            { Title }
                        </h1>
                    </div>
                    <div className="aboutHero_Subtitle ofh">
                        <p ref={subtitleRef} style={{transform: hide, transition: `all 1s ${quart}`}}>
                            { Subtitle }
                        </p>
                    </div>
                </div>
                <div className="aboutHero_ImgContainer">
                    <div className="aboutHero_Img">
                        <video 
                            autoPlay="true" muted="true" disableRemotePlayback loop="true" 
                            height="100%" playsInline="true" width="100%" style={{height:'100%', width:'100%', objectFit:'contain'}}>
                                <source src="/About/AboutHero/about.mp4" disableRemotePlayback type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            {/* offsetSection */}
            <div className="aboutInfo">
                <div className="aboutInfo_ContentB">
                    <div className="aboutInfo_ContentBImg" >
                        <video 
                            autoPlay="true" muted="true" disableRemotePlayback loop="true" 
                            height="100%" playsInline="true" width="100%" style={{height:'100%', width:'100%', objectFit:'cover',borderRadius: '0.625em'}}>
                            <source src="/About/AboutHero/about-2.mp4" disableRemotePlayback type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="aboutInfo_Bottom_Main_Container" >
                    <div className="aboutInfo_BottomContainer">
                        <div className="aboutInfo_BottomText ofh">
                            <p className="testRef" style={{transform: 'translateY(150%)', transition: `all 1s ${quint}`}}>
                                { BottomText }
                            </p>
                        </div>
                    </div>
                    <div className="CTA_About_Container">
                        <CTA classNameA="CTA_About_A" classNameB="CTA_About_B" bg="#FFF" />
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}