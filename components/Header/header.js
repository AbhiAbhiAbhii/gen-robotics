/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { useEffect, useRef, useState, } from "react"

export default function Header({lenis, style, ref, color, pageId}) {


    let menuData = [{ content: 'Robotics & AI', link:'/about' },{ content: 'Medical & Mobility', link:'https://genroboticsmedical.com/', target:'_blank' },{ content: 'Newsroom', link:'/newsroom' },{ content: 'Contact us', link:'/contact' },{ content: 'Careers', link:'/career' }]
    let menuSocials = [{ socials: 'LI', link:'https://www.linkedin.com/company/genrobotics/' },{ socials: 'FB', link:'https://www.facebook.com/genrobotics.org/' },{ socials: 'TW', link:'https://twitter.com/genrobotic/' },{ socials: 'IN', link:'https://www.instagram.com/genroboticinnovations/?hl=en' }]
    let legal = [{ legal: 'Terms & Condition', link:'/terms&condition' },{ legal: 'Privacy Policy', link:'/privacypolicy' }]
    let ourProducts = [{products: 'Bandicoot', link:'/products/bandicoot'}, {products: 'Bandicoot Mini', link:'/products/bandicootmini'},{products:'Bandicoot Mobility+', link:'/products/bandicoot-mobilityplus'}, {products: 'Willboar', link:'/products/willboar'}]


    // state for menu
    const [displayMenu, setDisplayMenu] = useState(false);




    const navRef = useRef();
    const menuRef = useRef();

    // function to execute on MenuTrigger
    const MenuTrigger = () => {
        let lineOne = document. querySelector(".lOne"); // lineOne
        let lineTwo = document.querySelector(".lTwo"); // lineTwo

        lineOne.classList.toggle("rotateLineOne"); // toggle LineOne
        lineTwo.classList.toggle("rotateLineTwo"); // toggle LineTwo

        // Menu title anim via toggling class
        
        // menu middle line animation
        let menuLine = document.querySelector(".menu_Line");

        // if statment

        if(!displayMenu) {

            //menu title anim
            setTimeout(() => {
                document.querySelectorAll(".menu_title").forEach(menuTitleDiv => {
                    menuTitleDiv.style.opacity = '1';
                })
            },1000)

            //menu line anim
            setTimeout(() => {
                menuLine.style.height = "100%"
            }, 500)
            //menu text anim
             setTimeout(() => {
                 document.querySelectorAll(".menu_Item").forEach(menuItemDiv => {
                     menuItemDiv.style.opacity = '1';
                 })
             }, 1000)

            menuRef.current.style.top = '0';

        } else if(displayMenu) {

            // menu item
            document.querySelectorAll(".menu_Item").forEach(menuItemDiv => {
                menuItemDiv.style.opacity = '0';
            })

            // menuLine.classList.toggle(".menu_Left");

            // menu title
            document.querySelectorAll(".menu_title").forEach(menuTitleDiv => {
                menuTitleDiv.style.opacity = '0';
            })

            // menu line anim height 0
            setTimeout(() => {
                menuLine.style.height = "0"
            }, 1000)
            

            // delaying menu top until every animation occurs
            setTimeout(() => {
                menuRef.current.style.top = '-100vh';
            }, 1500)
        }



        
        setDisplayMenu(!displayMenu);

    }



    useEffect(() => {

          window.onscroll = () => {
              if(window.scrollY > 6){
                navRef.current.style.backgroundColor = 'rgba(70, 70, 70, 0.8)';
                navRef.current.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                navRef.current.style.backdropFilter = 'blur(15.2px)';
                navRef.current.style.WebkitBackdropFilter = 'blur(15.2px)';
              }
              else {
                navRef.current.style.backgroundColor = 'transparent';
                navRef.current.style.backdropFilter = 'none';
                navRef.current.style.boxShadow = 'none';
                navRef.current.style.filter = 'none';
                navRef.current.style.border = 'none';
              }
          }


    }, [])

   

    return(
        <>
        <nav ref={navRef} className="nav" id="navigation-bar" style={style}>
            <div className="navContainer">
                <div onClick={MenuTrigger} className="navMenu_Container">
                    <div className="navCircle" style={{border:`1px ${color} solid`}}>
                        <div className="lOne" style={{backgroundColor:color}} /> {/* lineOne */}
                        <div className="lTwo" style={{backgroundColor:color}} /> {/* lineTwo */}
                    </div>
                    <div className="navMenu_Text" style={{color:'#FFF'}}><p style={{color:color}}>Menu</p></div>
                </div>
                <a className="navLogo" href="/" >
                    <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/logoGenRobo.svg" alt="logo" />
                </a>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <button onClick={() => window.location.href='/contact'} className="talkToUsBtn"  style={{border:`1px ${color} solid`, padding:'1rem 2.4rem', borderRadius:'0.63rem', color:color}}>Talk to us</button>
                </div>
            </div>
        </nav>

        {/* menu */}

        {/* {
            displayMenu && */}
             <div className="menu" ref={menuRef} style={{top:'-100vh'}}>
            <div className="menu_Container">
                <div className="menu_InnerContainer">
                    {/* menu content */}
                    <div className="menu_Content">
                        {/* menuLeft */}
                        <div className="menu_Left"> 
                            {/* middle line */}
                            <div className="menu_Line" />
                            {/* ---- */}
                            {/* company */}
                            <div className="menu_Left_Container menu_Left_Container_Company">
                                <div className="menu_title">
                                    <p>
                                        Company
                                    </p>
                                </div>
                                <div className="menu_Left_Content">
                                    <div className="menu_Item_Container menu_Item_Container_Company">
                                        {
                                            menuData.map((data, i) => {
                                                return(
                                                    <a onClick={MenuTrigger} href={data.link} rel="dns-prefetch" target={data.target} key={i} className="menu_Item" style={{width:'50%'}}>
                                                        <p>{data.content}</p>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Socials */}
                            <div className="menu_Left_Container menu_Left_Container_Socials">
                                <div className="menu_title menu_title_Socials">
                                    <p>
                                        Socials
                                    </p>
                                </div>
                                <div className="menu_Left_Content menu_Left_Content_Socials">
                                    <div className="menu_Item_Container menu_Item_Container_Socials">
                                        {
                                            menuSocials.map((data, i) => {
                                                return(
                                                    <a href={data.link} target="_blank"  rel="dns-prefetch"  key={i} className="menu_Item menu_Item_Socials">
                                                        <p>{data.socials}</p>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Legal */}
                            <div className="menu_Left_Container menu_Left_Container_Legal">
                                <div className="menu_title">
                                    <p>
                                        Legal
                                    </p>
                                </div>
                                <div className="menu_Left_Content">
                                    <div className="menu_Item_Container menu_Item_NoWrap menu_Item_Container_Legal">
                                        {
                                            legal.map((data, i) => {
                                                return(
                                                    <a key={i} href={data.link} rel="dns-prefetch" className="menu_Item menu_Item_Legal">
                                                        <p>{data.legal}</p>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* menu left end */}
                        {/* menu right */}
                        <div className="menu_Right">
                            <div className="menu_Right_Container">
                                <div className="menu_Right_Content">
                                    {/* prismic */}
                                    <div>
                                        <div className="menu_title menu_title_Products">
                                            <p>Our products</p>
                                        </div>
                                        <div className="menu_Item_Container menu_Item_Container_NoWrap_NoFlex">
                                            {
                                                ourProducts.map((data, i) => {

                                                    return(
                                                        <div 
                                                            onClick={() => window.location.href= data.link} 
                                                            key={i} 
                                                            className="menu_Item dataProd">
                                                            <p>
                                                                {data.products}
                                                            </p>
                                                            <span 
                                                                style={{display: i == 1 ? '': i == 2 ? '': 'none'}}>
                                                                <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/menu/temp.svg" alt='img' />
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* ---- */}
                                    <div className="menu_Right_CTA_Mob">
                                        <button>
                                            Talk to us
                                        </button>
                                   </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </div>
        {/* }         */}

        </>
    )
}