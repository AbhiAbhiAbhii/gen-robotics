/* eslint-disable @next/next/no-img-element */


export default function Footer(){

    let nav = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Medical & Mobility',
            link: 'https://genroboticsmedical.com/',
            target:'_blank'
        },
        {
            name: 'Robotics & AI',
            link: '/about'
        },
        {
            name: 'Newsroom',
            link: '/newsroom'
        },
    ]

    let products = [
        {
            name: 'Bandicoot',
            link:'/products/bandicoot'
        },
        {
            name: 'Bandicoot Mini',
            link:'/'
        },
        {
            name: 'Bandicoot Mobility+',
            link:'/'
        },
        {
            name: 'Willboar',
            link:'/'
        },
    ]

    let contact = [
        {
            name: 'Careers',
            link: '/career'
        },
        {
            name: 'Contact',
            link: '/'
        },        
    ]

    let socials = [
        {
            name: 'LI',
            link: 'https://www.linkedin.com/company/genrobotics/'
        },
        {
            name: 'FB',
            link: 'https://www.facebook.com/genrobotics.org/'
        },
        {
            name: 'TW',
            link: 'https://twitter.com/genrobotic/'
        },
        {
            name: 'IN',
            link: 'https://www.instagram.com/genroboticinnovations/?hl=en'
        },        
    ]

    let footerBottom = "© 2023 Genrobotics - All rights reserved";

    let privacy = [
        {
            name: 'Privacy Policy',
            link:'/privacypolicy'
        },
        {
            name: 'Terms & Condition',
            link:'/terms&condition'
        }
    ]

    return(
        <>
        <footer className="footer">
            <div className="footer_Container">
                <div className="footer_Container__left">
                    {/* Nav */}
                    <div className="footer_Container_leftItems">
                        {
                            nav.map((data, i) => {
                                return(
                                    <div className="footer_Item" key={i}>
                                        <a href={data.link} target={data.target}>{ data.name }</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Products */}
                    <div className="footer_Container_leftItems">
                        {
                            products.map((data, i) => {
                                return(
                                    <div className="footer_Item" style={{display:'flex', alignItems:'center'}} key={i}>
                                        <a href={data.link}>{ data.name }</a>
                                        <span 
                                        style={{display: i == 1 ? '': i == 2 ? '': 'none', marginLeft:'0.5em'}}>
                                            <img src="/menu/temp.svg" alt='img' />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Contact */}
                    <div className="footer_Container_leftItems">
                        {
                            contact.map((data, i) => {
                                return(
                                    <div className="footer_Item" key={i}>
                                        <a href={data.link}>{ data.name }</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="footer_Container__right">
                    <div className="footer_Container_rightItems">
                        {
                            socials.map((data, i) => {
                                return(
                                    <div className="footer_rightItem" key={i}>
                                        <a href={data.link} target="_blank">{ data.name }</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* footer-bottom */}
            <div className="footerBottom">
                <div className="footerBottom_Container">
                    <div className="footerBottom_left">
                        <div className="footerBottom_leftItem Allrights">
                            <p>{ footerBottom }</p>
                        </div>
                        {
                            privacy.map((data, i) => {
                                return(
                                    <div className="footerBottom_leftItem privacy" href={data.link} key={i}>
                                        <p>
                                            { data.name }
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="footerBottom_rightItem_Container">
                        <a href="https://www.neovibe.in/" target="_blank" style={{cursor:'pointer'}} className="footerBottom_rightItem">
                            <p>
                                Powered by Neovibe
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}