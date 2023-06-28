import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function ImagePlay({ frameCount, imageLinks, travelPixel, texts }) {
    const sectionRef = useRef()
    const canvasRef = useRef()
    const imageObjects = useRef([])
    const contextRef = useRef()
    const imgSeqRef = useRef({ frame: 1 })
    const firstLoad = useRef(false)
    const timeline = useRef(gsap.timeline())
    const textContainer = useRef()

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
        }

        firstLoad.current = true
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

    // Gsap for reveal animation
    useEffect(() => {
            gsap.to(".testDivB",
            {
                // borderRadius:'0%',
                width: '100%',
                height:'200%',
                // scale:10,
                scale: 2,
                duration: 2,
                scrollTrigger: {
                    trigger:'.testDivB',
                    start:'top top',
                    scrub: true,
                    toggleActions: 'restart none none none'
                }
            }
        )

        gsap.to(".myCanva",
        {
            scale:0.5,
            scrollTrigger: {
                trigger:'.testDiv',
                start:'top top',
                scrub: true,
                toggleActions: 'restart none none none'
            }
        })
    })


    return <section className="testDiv" ref={sectionRef} style={{ position: "relative" }} >
        <div className="testDivB" style={{width:'40%', height:'80%', background:'#FFF', borderRadius:'50%', scale:'1'}}>
            <canvas className="myCanva" ref={canvasRef} />
            <div ref={textContainer} style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "left", alignItems: "center" }} >
                {
                    texts && texts.map((t, i) => <h1 id={t.id} key={i} >{t.text}</h1>)
                }
            </div>
        </div>
    </section>
}