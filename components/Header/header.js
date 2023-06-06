/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { useEffect, useRef, useState, } from "react"

export default function Header({lenis, style, ref}) {


    let menuData = [{ content: 'Robotics & AI', link:'/about' },{ content: 'Medical & Mobility', link:'/' },{ content: 'Newsroom', link:'/' },{ content: 'Contact us', link:'/contact' },{ content: 'Careers', link:'/' }]
    let menuSocials = [{ socials: 'LI', link:'https://www.linkedin.com/company/genrobotics/' },{ socials: 'FB', link:'https://www.facebook.com/genrobotics.org/' },{ socials: 'TW', link:'https://twitter.com/genrobotic/' },{ socials: 'IN', link:'https://www.instagram.com/genroboticinnovations/?hl=en' }]
    let legal = [{ legal: 'Terms & Condition' },{ legal: 'Privacy Policy' }]
    let ourProducts = [{products: 'Bandicoot', link:'/products/bandicootII'}, {products: 'Bandicoot Mini', link:'/'},{products:'Bandicoot Mobility+', link:'/'}, {products: 'Willboar', link:'/'}]


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
        <nav ref={navRef} className="nav" style={style}>
            <div className="navContainer">
                <div onClick={MenuTrigger} className="navMenu_Container">
                    <div className="navCircle">
                        <div className="lOne" /> {/* lineOne */}
                        <div className="lTwo" /> {/* lineTwo */}
                    </div>
                    <div style={{color:'#FFF'}}><p>Menu</p></div>
                </div>
                <div onClick={() => window.location.href='/'} style={{height:'4rem', width:'14.625rem', cursor:'pointer'}}>
                    <img style={{height:'100%', width:'100%', objectFit:'cover'}} src="/logoGenRobo.svg" alt="logo" />
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <button onClick={() => window.location.href='/contact'} className="talkToUsBtn"  style={{border:'1px #FFF solid', padding:'1rem 2.4rem', borderRadius:'0.63rem'}}>Talk to us</button>
                </div>
            </div>
        </nav>

        {/* menu */}

        {/* {
            displayMenu && */}
             <div className="menu" ref={menuRef} style={{top:'-100vh'}}>
            <div className="menu_Container" style={{width:'100%', height:'100%', display:'flex', alignItems:'flex-end'}}>
                <div className="menu_InnerContainer" style={{width: '100%', height:'82%', padding:'0 4em'}}>
                    {/* menu content */}
                    <div className="menu_Content" style={{ height:'100%', padding:'2em 0em 2em 3em', display:'flex', justifyContent:'space-between'}}>
                        {/* menuLeft */}
                        <div className="menu_Left" style={{position:'relative'}}> 
                        {/* middle line */}
                        <div className="menu_Line" />
                        {/* ---- */}
                            {/* company */}
                            <div className="menu_Left_Container">
                                <div className="menu_title">
                                    <p>
                                        Company
                                    </p>
                                </div>
                                <div className="menu_Left_Content">
                                    <div className="menu_Item_Container" style={{display:'flex', flexWrap:'wrap'}}>
                                        {
                                            menuData.map((data, i) => {
                                                return(
                                                    <Link onClick={MenuTrigger} href={data.link}  key={i} className="menu_Item" style={{width:'50%'}}>
                                                        <p>{data.content}</p>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Socials */}
                            <div className="menu_Left_Container">
                                <div className="menu_title">
                                    <p>
                                        Socials
                                    </p>
                                </div>
                                <div className="menu_Left_Content">
                                    <div className="menu_Item_Container" style={{display:'flex', flexWrap:'wrap'}}>
                                        {
                                            menuSocials.map((data, i) => {
                                                return(
                                                    <a href={data.link} target="_blank"  key={i} className="menu_Item" style={{display:'flex', alignItems:'center', marginRight:'2rem'}}>
                                                        <p>{data.socials}</p>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Legal */}
                            <div className="menu_Left_Container">
                                <div className="menu_title">
                                    <p>
                                        Legal
                                    </p>
                                </div>
                                <div className="menu_Left_Content">
                                    <div className="menu_Item_Container" style={{display:'flex'}}>
                                        {
                                            legal.map((data, i) => {
                                                return(
                                                    <div key={i} className="menu_Item" style={{marginRight:'2rem'}}>
                                                        <p>{data.legal}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* menu left end */}
                        {/* menu right */}
                        <div className="menu_Right" style={{width:'50%', padding:'0 0 0 8em'}}>
                            <div className="menu_Right_Container" style={{display:'flex', height:'100%'}}>
                                <div className="menu_Right_Content" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                                    {/* prismic */}
                                    <div>
                                        <div className="menu_title">
                                            <p>Our products</p>
                                        </div>
                                        <div className="menu_Item_Container">
                                            {
                                                ourProducts.map((data, i) => {

                                                    return(
                                                        <div onClick={() => window.location.href= data.link} key={i} style={{padding:'0.2em 0', margin:'0.2em 0', display:'flex', alignItems:'center'}} className="menu_Item dataProd">
                                                            <p>
                                                                {data.products}
                                                            </p>
                                                            <span 
                                                                style={{display: i == 1 ? '': i == 2 ? '': 'none', marginLeft:'0.5em'}}>
                                                                <img src="/menu/temp.svg" alt='img' />
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* ---- */}
                                    {/* <div className="featured">
                                        {
                                            [
                                                {src: '/menu/featuredDummy.png', title:'Bandicoot II', description: 'Bandicoot comes with 4 Robotic Legs to improve stabilization by adjusting each '}
                                            ].map((data, i) => {
                                                return(
                                                    <div className="featured_Container" style={{display:'flex', alignItems:'flex-end'}} key={i}>
                                                        <div>
                                                            <img src={data.src} alt="image" />
                                                        </div>
                                                        <div style={{margin: '0 0 0 1em'}}>
                                                            <div style={{color:'#FFF', textTransform:'uppercase', padding: '0.2em 0'}}>
                                                                <p style={{fontSize:'2em'}}>{data.title}</p>
                                                            </div>
                                                            <div style={{width:'70%'}}><p style={{fontSize:'1em', lineHeight:'120%', color:'#898989'}}>{data.description}</p></div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div> */}
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