import { useEffect, useRef } from "react";


export default function Loader(){

    // Transition
   let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
   let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

   const LoaderFrameRef = useRef(); 
   const loaderTextRef = useRef();
   const loaderBarRef = useRef();
   const loaderFillRef = useRef();

   useEffect(() => {

    loaderTextRef.current.style.transform = "translateY(0)"
    loaderBarRef.current.style.opacity = "1"

    setTimeout(() => {
        loaderFillRef.current.style.width = "100%"
    }, 4900)

    setTimeout(() => {
        loaderTextRef.current.style.transform = "translateY(100%)"
        loaderBarRef.current.style.opacity = "0"
    }, 5050)

    setTimeout(() => {
        LoaderFrameRef.current.style.opacity = "0"
    }, 6050)

   })


    return(
        <>
        <div ref={LoaderFrameRef} className="LOADER" style={{height:'100vh', width:'100vw', background:'#FFFF', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transition: `all 0.5s ${quint}` }}>
            <div style={{color:'black', overflow:'hidden'}}>
                <p ref={loaderTextRef} style={{textAlign:'center', fontSize:'1.6em', transform:'translateY(100%)', transition:`all 1.4s ${quart}`}}>
                    Innovation Beyond Technology
                </p>
            </div>
            <div ref={loaderBarRef} style={{height:'3px', background:'#D4D4D4',margin:'1em 0', width:'20%', transition:`all 1s ${quint}`, opacity:'0'}}>
                <div ref={loaderFillRef} className="LoaderProgress" style={{height:'100%'}}></div>
            </div>
        </div>
        </>
    )
}