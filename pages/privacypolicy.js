/* eslint-disable @next/next/no-html-link-for-pages */
import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"
import BulletComponent from "../components/T&C/BulletComponent"
import ComponentA from "../components/T&C/ComponentA"
import ComponentB from "../components/T&C/ComponentB"
import ComponentC from "../components/T&C/ComponentC"


export default function PrivacyPolicy() {

    // Bullet Data Array
   

    let Title = "Privacy Policy"

    let paraATextA = "At Genrobotics, accessible from https://gen-robotics.vercel.app/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Genrobotics and how we use it."
    let paraATextB = "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."

    let LogFiles = <ComponentB
        SubTitle="Log Files"
        DescriptionA="Genrobotics follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator."
    />

    let CookiesWeb = <ComponentA 
        SubTitle="Cookies and Web Beacons"
        DescriptionA= {`Like any other website, Genrobotics uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.`}
        DescriptionB='For more general information on cookies, please read the "Cookies" article from the Privacy Policy Generator.'
    />

    let GDC = <ComponentA 
        SubTitle="Google DoubleClick DART Cookie"
        DescriptionA="Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads"
    />

    let Advertising = <ComponentB
        SubTitle="Our Advertising Partners"
        DescriptionA="Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below."
    />

    let PrivacyPolicies = <ComponentA
        SubTitle="Privacy Policies"
        DescriptionA="You may consult this list to find the Privacy Policy for each of the advertising partners of Genrobotics."
        DescriptionB="Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Genrobotics, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."
    />

    let TextA = "Note that Genrobotics has no access to or control over these cookies that are used by third-party advertisers."

    let ThirdParty = <ComponentA 
        SubTitle="Third Party Privacy Policies"
        DescriptionA="Genrobotics's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options."
        DescriptionB="You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?"
    />

    let ChildInfo = <ComponentA 
        SubTitle="Children's Information"
        DescriptionA="Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."
        DescriptionB="Genrobotics does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
    />

    let OnlinePrivacy = <ComponentB 
        SubTitle="Online Privacy Policy Only"
        DescriptionA="This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Genrobotics. This policy is not applicable to any information collected offline or via channels other than this website."
    />

    let Consent = <ComponentC
        SubTitle="Consent"
        DescriptionA="By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."
        DescriptionB="Email:"
        DescriptionC="Phone number:"
    />

    

    return(
        <>
        <Header />
        <section className="privacyPage">
            <div className="privacy_Container">
                <div className="terms_Title">
                    <h1>
                        { Title }
                    </h1>
                </div>
                <div className="terms_Para">
                    <p>
                        { paraATextA } <br /><br />{ paraATextB }
                    </p>
                </div>
                { LogFiles }
                { CookiesWeb }
                { GDC }
                { Advertising }
                <div className="bullet_Point_Container">
                    <ul>
                        <a href="https://policies.google.com/technologies/ads">
                            <li>
                                <p>Google</p>
                            </li>
                            <p>
                            https://policies.google.com/technologies/ads
                            </p>
                        </a>
                    </ul>
                </div>
                { PrivacyPolicies }
                <div className="terms_Para">
                    <p>
                        { TextA }
                    </p>
                </div>
                { ThirdParty }
                { ChildInfo }
                { OnlinePrivacy }
                { Consent }
            </div>
        </section>
        <Footer />
        </>
    )
}