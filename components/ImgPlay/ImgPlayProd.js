import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function ImagePlayProd({ frameCount, imageLinks, travelPixel, texts, title }) {
    const sectionRef = useRef()
    const canvasRef = useRef()
    const imageObjects = useRef([])
    const contextRef = useRef()
    const imgSeqRef = useRef({ frame: 1 })
    const firstLoad = useRef(false)
    const timeline = useRef(gsap.timeline())
    const textContainer = useRef()
    const progressRef = useRef()



    useEffect(() => {
        if (!firstLoad.current) {
            contextRef.current = canvasRef.current.getContext("2d")
            canvasRef.current.height = window.innerHeight
            canvasRef.current.width = window.innerWidth
    
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = imageLinks[i];
                imageObjects.current.push(img);
            }
    
            timeline.current.to(imgSeqRef.current, {
                frame: frameCount - 1,
                snap: 'frame',
                ease: 'none',
                scrollTrigger: {
                    scrub: 0.15,
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: `${travelPixel || 1000}px top`,
                    scroller: 'body',
                    pin: true,
                },
                onUpdate: render
            })
    
            imageObjects.current[0].onload = render

            if (texts && texts.length > 0) {
                texts.forEach((t) => {
                    const pixelPerFrame = travelPixel / frameCount
                    const start = t.startFrame * pixelPerFrame
                    const end = t.endFrame * pixelPerFrame

                    gsap.timeline({
                        defaults: {duration: 1},
                        scrollTrigger: {
                            trigger: textContainer.current,
                            scrub: true,
                            start: `${start}px top`,
                            end: `${end}px top`,
                        }
                    })
                    .fromTo(`#${t.id}`, {y: 25, opacity: 0}, {y: -25, opacity: 1}) // Add text animations here
                    .to(`#${t.id}`, { opacity: 0 })
                })
            }


            // Progress animation
            const start = 0;
            const end =  travelPixel + 100;

            gsap.to(progressRef.current, 
            {
                width:'100%',
                scrollTrigger: {
                    trigger: textContainer.current,
                    scrub: true,
                    start: `${start}px top`,
                    end: `${end}px top`,
                }
            })
            
            
        }

        firstLoad.current = true


        // ---------------------
        // Navbar Intersection Observer

        let NavBar = document.getElementById('navigation-bar');
        const observer = new IntersectionObserver((entry) => {
            entry.forEach(entries => {
                if (entries.isIntersecting) {
                    NavBar.style.opacity ="0"
                } else NavBar.style.opacity = "1"
            })
        })

        observer.observe(document.querySelector('.productImgSeq'));

    }, [])

    const render = () => {
        var img = imageObjects.current[imgSeqRef.current.frame]
        var canvas = contextRef.current.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
        contextRef.current.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );  
    }



    return <section className="productImgSeq" ref={sectionRef} style={{ position: "relative", display:'flex', alignItems:'center', justifyContent:'flex-end', background:'#010005'}} >
            <canvas ref={canvasRef} style={{width:'62vw', height:'100vh', objectFit:'cover'}} />
            <div ref={textContainer} style={{ position: "absolute", top: 0, left: 0, height:'100%', width:'100%', padding:'4rem 2rem 2rem 3rem'}}>
                <div style={{position:'relative', height:'100%', width:'100%'}}>
                    <div className="prodImg_Seq_Title">
                        <h1>
                            { title }
                        </h1>
                    </div>
                    {
                        texts && texts.map((t, i) => {
                            return(
                                <div className="prodImg_Seq_Overlay" key={i}>
                                    <div className="prodImg_Seq_MainText">
                                        <h1 id={t.id}>
                                            { t.mainText }
                                        </h1>
                                    </div>
                                    <div className="prodImg_Seq_Text">
                                        <p id={t.id}>
                                            {
                                                t.text
                                            }
                                        </p>
                                    </div>
                                    <div style={{ background:'#757573', margin:'0.5em 0 0 0', width:'25%', height:'5px', position:'relative', borderRadius:'20em'}}>
                                        <div ref={progressRef} style={{position:'absolute', top:'0', left:'0', height:'100%', width:'2%', background:'#D1BD55', borderRadius:'20em'}} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </section>
}