import CTA from "../components/CTAComponent";
import FOFCTA from "../components/FOFCTA";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";


export default function NotFound({}){

    return(
        <>
        <Header color="#020202" />
        <section className="fOf">
            <div className="fof_Container">
                <div className="fof_Title">
                    <div className="fof_Number">
                        <p style={{color:"#242423"}}>
                            4<span style={{color:'#666666'}}>0</span>4
                        </p>
                    </div>
                    <div className="fof_Text">
                        <p style={{color:'#666666'}}>
                            PAGE NOT FOUND
                        </p>
                    </div>
                </div>
                <FOFCTA bg="#FFF" height="6em" width="22em" widthB="8em" />
            </div>
        </section>
        </>
    )
}