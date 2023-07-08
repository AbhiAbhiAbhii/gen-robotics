/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
//Components
let fill = "#FFAC05"
let ArrowBg = "#322712"

let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


export default function CTA({ width, widthB, height, margin, bg, classNameA, classNameB }){
    return(
        <div style={{margin: margin, transition: `all 1.5s ${quint}`}}>
            <a href="/contact">
                <button style={{cursor:'pointer', background:'none', outline:'none', display:'flex', alignItems:'center', border:'none', borderRadius:'0.625em'}}>
                    <div className={ classNameA } style={{background: bg, height: height, width: width, padding:'2em 0em', display:'flex', alignItems:'center', justifyContent:'center', borderBottomLeftRadius:'0.625em', borderTopLeftRadius:'0.625em'}}>
                        <p>
                            Get in touch
                        </p>
                    </div>
                    <div className={ classNameB } style={{background:'#D1BD55', height: height , width: widthB, padding:'2em 0', display:'flex', alignItems:'center', justifyContent:'center', borderTopRightRadius:'0.625em', borderBottomRightRadius:'0.625em'}}>
                        <div style={{borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', background: ArrowBg, height:'2.6em', width:'2.6em'}}>
                            <img style={{height:'60%', width:'60%', objectFit:'contain'}} src="/CtaArrow.svg" alt=" arrow" />
                        </div>
                    </div>
                </button>
            </a>
        </div>
    )
}