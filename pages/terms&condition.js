import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import BulletComponent from "../components/T&C/BulletComponent";
import ComponentA from "../components/T&C/ComponentA";
import ComponentB from "../components/T&C/ComponentB";


export default function TermsCondition() {

//Bullet Data Array
let BDataA = [
    {
        bullet: "Republish material from Genrobotics"
    },
    {
        bullet:"Sell, rent or sub-license material from Genrobotics"
    },
    {
        bullet: "Reproduce, duplicate or copy material from Genrobotics"
    },
    {
        bullet:"Redistribute content from Genrobotics"
    }
]

let BDataB = [
    {
        bullet:"You are entitled to post the Comments on our website and have all necessary licenses and consents to do so"
    },
    {
        bullet:"The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party"
    },
    {
        bullet:"The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy"
    },
    {
        bullet:"The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity"
    }
]

let BDataC = [
    {
        bullet:"Government agencies;"
    },
    {
        bullet:"Search engines;"
    },
    {
        bullet:"News organizations;"
    },
    {
        bullet:"Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and"
    },
    {
        bullet:"System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site."
    }
]

let BDataD = [
    {
        bullet:"By use of our corporate name;"
    },
    {
        bullet:"By use of the uniform resource locator being linked to; or"
    },
    {
        bullet:"By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site."
    }
]

let BDataE = [ 
    {
        bullet:"limit or exclude our or your liability for death or personal injury"
    },
    {
        bullet:"limit or exclude our or your liability for fraud or fraudulent misrepresentation"
    },
    {
        bullet:"limit any of our or your liabilities in any way that is not permitted under applicable law"
    },
    {
        bullet:"exclude any of our or your liabilities that may not be excluded under applicable law"
    }
]


let Title = "Terms and Conditions";

//Para A Data
let paraATextA = "Welcome to Genrobotics!"
let paraATextB = "These terms and conditions outline the rules and regulations for the use of genrobotics's Website, located at https://gen-robotics.vercel.app/"
let paraATextC = "By accessing this website we assume you accept these terms and conditions. Do not continue to use Genrobotics if you do not agree to take all of the terms and conditions stated on this page."
let paraATextD =`The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`

//Para B Data

let Cookies = <ComponentA
    SubTitle="Cookie"
    DescriptionA="We employ the use of cookies. By accessing Genrobotics, you agreed to use cookies in agreement with the genrobotics's Privacy Policy."
    DescriptionB=" Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."
/>

let License = <ComponentB
    SubTitle="License"
    DescriptionA="Unless otherwise stated, genrobotics and/or its licensors own the intellectual property rights for all material on Genrobotics. All intellectual property rights are reserved. You may access this from Genrobotics for your own personal use subjected to restrictions set in these terms and conditions."
/>

//Bullet Data
let BulletA = <BulletComponent 
    BulletText="You must not:"
    DataArray={BDataA}
/>

//Para C Data
let paraCTextA ="This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator."
let paraCTextB = "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. genrobotics does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of genrobotics,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, genrobotics shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website."
let paraCTextC = "Genrobotics reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions."

//Bullet Data B
let BulletB = <BulletComponent
    BulletText="You warrant and represent that:"
    DataArray={BDataB}
/>

// Bullet Data C
let BulletC = <BulletComponent 
    BulletText="The following organizations may link to our Website without prior written approval:"
    DataArray={BDataC}
/>
// 
let paraDTextA = "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of genrobotics; and (d) the link is in the context of general resource information."
let paraDTextB = "These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site."
let paraDTextC = "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to genrobotics. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response."

//Bullet Data D
let BulletD = <BulletComponent 
    BulletText="Approved organizations may hyperlink to our Website as follows:"
    DataArray={BDataD}
/>
let paraETextA = "No use of genrobotics's logo or other artwork will be allowed for linking absent a trademark license agreement."

let iFrames = <ComponentB
    SubTitle="iFrames"
    DescriptionA="Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website."
/>

let ContentLiability = <ComponentB
    SubTitle="Content Liability"
    DescriptionA="We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."
/>

let RR = <ComponentB
    SubTitle="Reservation of Rights"
    DescriptionA="We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
/>

let RL = <ComponentA 
    SubTitle="Removal of links from our website"
    DescriptionA="If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly."
    DescriptionB="We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date."
/>

let Disclaimer = "Disclaimer"

let DisclaimerBullet = <BulletComponent 
    BulletText="To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:"
    DataArray={BDataE}
/>

let paraETextB ="The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty."

let paraETextC = "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."


    return(
        <>
        <Header />
            <section className="terms">
                <div className="terms_Container">
                    <div className="terms_Title">
                        <h1>
                            { Title }
                        </h1>
                    </div>
                    <div className="terms_Para">
                        <p>
                            { paraATextA } <br /><br />{ paraATextB }<br /><br />{ paraATextC }<br/><br/>{ paraATextD }
                        </p>
                    </div>
                    <div className="terms_Para">
                        { Cookies }
                        { License }
                        { BulletA }
                        <div className="terms_Para_Inner">
                            <p>
                                { paraCTextA }
                            </p><br />
                            <p>
                                { paraCTextB }
                            </p><br /><br />
                            <p>
                                { paraCTextC }
                            </p>
                        </div>
                    </div>
                    <div className="terms_Para">
                        { BulletB }
                    </div>
                    <div className="terms_Para">

                        <div className="TC_Component_Title">
                            <h3>
                                { Title }
                            </h3>
                        </div>
                        { BulletC }
                        <p>
                            { paraDTextA }<br /><br />{ paraDTextB }<br /><br/>{ paraDTextC }
                        </p>
                        <div className="terms_Para_Pad">
                            { BulletD }
                        </div>
                        <br />
                        <p>
                            { paraETextA }
                        </p>
                    </div>

                    <div className="terms_Para">
                        { iFrames }
                        { ContentLiability }
                        { RR }
                        { RL }

                        <div className="TC_Component_Title">
                            <h3>
                                { Disclaimer }
                            </h3>
                        </div>
                        { DisclaimerBullet }
                        <p>
                            { paraETextB }<br /><br />{ paraETextC }
                        </p>
                    </div>
                </div>
            </section>
        <Footer />
        </>
    )
}