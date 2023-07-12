/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react"

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ImagePlayProd from "../ImgPlay/ImgPlayProd";
gsap.registerPlugin(ScrollTrigger)


export default function ProductImgSequence({imagelinks, frameCount, texts, ImgSeqTitle}){

    return(
        <>
        <section className="prodImg_Seq_Container" style={{ background:'#FFF' }}>
            <ImagePlayProd 
                ImgSeqTitle={ImgSeqTitle} texts={texts} 
                frameCount={frameCount} travelPixel={5000} 
                imageLinks={imagelinks} />
        </section>
        </>
    )
}