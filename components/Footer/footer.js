/* eslint-disable @next/next/no-img-element */


export default function Footer(){

    let nav = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Medical & Mobility',
            link: '/'
        },
        {
            name: 'About us',
            link: '/about'
        },
        {
            name: 'Newsroom',
            link: '/'
        },
    ]

    let products = [
        {
            name: 'Bandicoot II',
            link:'/'
        },
        {
            name: 'Bandicoot I',
            link:'/'
        },
        {
            name: 'Willboar',
            link:'/'
        },
        {
            name: 'G-Beetle',
            link:'/'
        },
    ]

    let contact = [
        {
            name: 'Careers',
            link: '/'
        },
        {
            name: 'Contact',
            link: '/'
        },        
    ]

    let socials = [
        {
            name: 'LI',
            link: '/'
        },
        {
            name: 'FB',
            link: '/'
        },
        {
            name: 'TW',
            link: '/'
        },
        {
            name: 'IN',
            link: '/'
        },        
    ]

    let footerBottom = "© 2023 Genrobotics - All rights reserved";

    let privacy = [
        {
            name: 'Privacy Policy',
        },
        {
            name: 'Terms & Condition',
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
                                        <a href={data.link}>{ data.name }</a>
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
                                        style={{display: i != 0 ? 'none':'', marginLeft:'0.5em'}}>
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
                                        <a href={data.link}>{ data.name }</a>
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
                                    <div className="footerBottom_leftItem privacy" key={i}>
                                        <p>
                                            { data.name }
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="footerBottom_rightItem_Container">
                        <div onClick={() => window.location.href="https://www.neovibe.in/"} style={{cursor:'pointer'}} className="footerBottom_rightItem">
                            <p>
                                Powered by Neovibe
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}