/* eslint-disable @next/next/no-img-element */


export default function Contact({style}){

    let srcB = "/About/gTouchArrow.svg";

    return(
        <div style={{display:'flex'}}>
            <input type="text" placeholder="Get in touch" style={{padding:'0.5em 2em', border:'none', outline:'none', borderTopLeftRadius:'0.625em', borderBottomLeftRadius:'0.625em'}} />
            <div className="GetinTouchBtn">
                <div className="arrowContainer" style={style}>
                    <img src={ srcB } alt="arrow" />
                </div>  
            </div>
        </div>
    )
}