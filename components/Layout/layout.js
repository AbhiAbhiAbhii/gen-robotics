import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Loader from "../Loader";


export default function Layout({children}) {

    return(
        <>
        <Header /> 
            {children}
        <Footer />
        </>
    )
}