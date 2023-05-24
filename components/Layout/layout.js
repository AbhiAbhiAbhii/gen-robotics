import { useEffect, useRef } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";


export default function Layout({children}) {

    return(
        <>
        <Header 
            //  style={{background: children.type.name === "RegistrationForm" ? 'red':'black'}}
            /> 
            {children}

        <Footer />
        </>
    )
}