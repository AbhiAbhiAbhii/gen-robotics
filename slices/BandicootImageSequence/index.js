import { useEffect, useRef } from "react"
//gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { render } from "react-dom";

/**
 * @typedef {import("@prismicio/client").Content.BandicootImageSequenceSlice} BandicootImageSequenceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BandicootImageSequenceSlice>} BandicootImageSequenceProps
 * @param {BandicootImageSequenceProps}
 */
export default function BandicootImageSequence({slice}) {

  // created image, added the frame and load it to the canvas
  
  useEffect(() => {
  
  const html = document.documentElement; // getting our html document

  const canvas = document.querySelector('.bandicoot-scrolling'); // getting out canvas 

  const context = canvas.getContext('2d'); // getting context

  // Consists of multiple frames to create the animation
  // Create a function for currentFrame

  const currentFrame = (index) => (
      // returning the url of the image
      // convert to string 
      //  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
      //  `/imgsequence/PNG SEQUENCE/${index.toString().padStart(4, '0')}.png`
      //  `/imgsequence/jpgFormat/${index.toString().padStart(4, '0')}.jpg`
       `/imgsequence/original/${index.toString().padStart(3, '0')}.webp` 
  )


  // create variable for the number of frames/image
  const frameCount = 100; // 100 frames/still images

  // canvas setup 
  // height and width of the image
  canvas.height = 1080;
  canvas.width = 1920;

  //new code [DID NOT WORK AT ALL]
    // const images = []  image of empty array
    // const bandicoot ={ 
    //   frame: 0        object of frame 0
    // };

    // for (let i = 0; i < frameCount; i++) {  rendering frames onto the canvas
    //   const img = new Image();
    //   img.src = currentFrame(i);
    //   images.push(img);
    // }

    // gsap implementation
    //  gsap.to(bandicoot, {
    //   frame: frameCount - 1,
    //   snap: 'frame',
    //   scrollTrigger: {
    //     scrub: 0.,
    //     trigger: '#img_Sequence',
    //     start:'top top',
    //     pin: true
    //   },
    //   onUpdate: render
    // });

    // images[0].onload = render;

    // function render() {
    //   ctx.canvas.width = ctx.canvas.width
    //   ctx.drawImage(images[bandicoot.frame], 0, 0);
    // }
  //---------


  // generate an image
   const img = new Image(); 
  // dynamically calling the img source from the currentFrame function
   img.src = currentFrame(1); 
  // console.log("image source", img.src)

  // loading the image onto the canvas
  img.onload = function() {
  context.drawImage(img, 0, 0)  // 0, 0 = x & y values
  }

  // create a function to update the img on scroll
  const updateImage = (index) => {
    img.src = currentFrame(index); // source of the img is the currentFrame index which will be updated

    context.drawImage(img, 0, 0); // every time the img is updated it is being rendered again in the canvas
  }


  // update with scroll // must modify here for for scroll trigger
  window.addEventListener('scroll', () => {
    // getting the scrollTop value
    const scrollTop = html.scrollTop;
    //  console.log("hhh", scrollTop);
    const maxScrollTop = html.scrollHeight - window.innerHeight; // getting the maxscrollheight;/ maximum value the user can scroll

    const scrollFraction = scrollTop / maxScrollTop; // scroll progress

     const frameIndex = Math.min(frameCount- 1, Math.floor(scrollFraction * frameCount));

    // update image

      requestAnimationFrame( () => updateImage(frameIndex + 1));

    })

  // pre-load the image and smoother animation
    const preloadImages = () => {
      for (let i = 1; i< frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    preloadImages();


   // IN-VIEW [ from top ]
    const inView = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if(entry.isIntersecting) {
         document.getElementById("img_Sequence").className = "bandicoot-scrolling-inview";
       }
     })
    },{threshold: 0.98})
    inView.observe(document.getElementById("img_Sequence"))
   //------------------------------------------------------

   // out of view [ from bottom ]
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if(entry.isIntersecting) {
           document.getElementById("img_Sequence").className = "bandicoot-scrolling";
         }
       })
     }, {threshold: 0.2})
     observer.observe(document.getElementById("heroabout"));

    //out of view
     const universalObserver = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if(entry.isIntersecting) {
           document.getElementById("img_Sequence").className = "bandicoot-scrolling-out-view";
         }
       })
     })
     universalObserver.observe(document.getElementById("safe"));

  }, [])

  
  return(
    <>
      <section className='bandicootImageSequence' id="blink" style={{backgroundColor:'#FFFFF'}}>
        {/* <div className='bandicootImageSequence_Container'> */}
        <canvas className="bandicoot-scrolling" id="img_Sequence" />
      </section>
    </>
  )
}
