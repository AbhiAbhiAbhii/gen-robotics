/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react"

gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function ProductImgSequence(){

    // useEffect(() => {
  
    //     const html = document.documentElement; 
      
    //     const canvas = document.querySelector('.prodImg_Seq_Item');  
      
    //     const context = canvas.getContext('2d'); 
      
      
    //     const currentFrame = (index) => (
    //         `/imgsequence/productPage/${index.toString().padStart(3, '0')}.webp`
    //     )
      
      
    //     const frameCount = 100; 
      
    //     canvas.height = 1080;
    //     canvas.width = 1080;
      
      
    //      const img = new Image(); 
    //      img.src = currentFrame(1); 
    //      console.log("image source", img.src)
      
    //      loading the image onto the canvas
    //     img.onload = function() {
    //     context.drawImage(img, 0, 0)   0, 0 = x & y values
    //     }
      
    //      create a function to update the img on scroll
    //     const updateImage = (index) => {
    //       img.src = currentFrame(index);  source of the img is the currentFrame index which will be updated
      
    //       context.drawImage(img, 0, 0);  every time the img is updated it is being rendered again in the canvas
    //     }
      
      
    //      update with scroll  must modify here for for scroll trigger
    //     window.addEventListener('scroll', () => {
    //        getting the scrollTop value
    //       const scrollTop = html.scrollTop;
    //         console.log("hhh", scrollTop);
    //       const maxScrollTop = html.scrollHeight - window.innerHeight;  getting the maxscrollheight;/ maximum value the user can scroll
      
    //       const scrollFraction = scrollTop / maxScrollTop;  scroll progress
      
    //        const frameIndex = Math.min(frameCount- 1, Math.floor(scrollFraction * frameCount));
      
    //        update image
      
    //         requestAnimationFrame( () => updateImage(frameIndex + 1));
      
    //       })
      
    //      pre-load the image and smoother animation
    //       const preloadImages = () => {
    //         for (let i = 1; i< frameCount; i++) {
    //           const img = new Image();
    //           img.src = currentFrame(i);
    //         }
    //       };
      
    //       preloadImages();


    //         TO PIN with GSAP trial
    //        gsap.to('.testDivvvvvvvv', {
    //          scrollTrigger: {
    //              trigger: '.prodImg_Seq_Item',
    //              start: 'top top',
    //              end: 'bottom center',
    //              scrub: 0.1,
    //              toggleActions: 'play none none reverse'
    //          },
    //          y: 200,
    //      })

         



    // })

    return(
        <>
        <section className="prodImg_Seq_Container" style={{background:'#242423', padding:"2rem", height:'95vh', overflow:'hidden'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', height:'100%'}}>
                <div style={{width:'35%', display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'3em 0 2em 2em', height:'100%'}}>
                    <div><p style={{fontSize:'1.25em', color:'#FFF', lineHeight:'150%'}}>Genrobotics, the leading Robotics company in India, primarily focusing on designing and development of Robotic solutions</p></div>
                    <div>
                        <div style={{padding:'1em 0'}}>
                            <p style={{fontSize:'3.3em', color:'#FFF'}}>Camera</p>
                        </div>
                        <div style={{width:'65%'}}>
                            <p style={{color:'#FFF', fontSize:'1.1em', lineHeight:'130%'}}>
                            Bandicoot has handles of for the <span className="gold">top area</span> and the <span className="dark-grey">bottom area.</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="testDivvvvvvvv" style={{width:'60%',}}>
                    <canvas className="prodImg_Seq_Item" id="prodImg_Seq" />
                </div> */} 
                <div className="IMAGEDUMMY" style={{width:'60%'}}>
                    <div style={{height:'100%', width:'100%'}}>
                        <img style={{height:'100%', width:'100%', objectFit:'contain'}} src="/Products/dummySeq.png" alt="image" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}