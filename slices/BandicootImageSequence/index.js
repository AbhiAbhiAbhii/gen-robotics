// import { useEffect, useRef } from "react"
// gsap
// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger)
// import { render } from "react-dom";


import ImagePlay from "../../components/ImgPlay/ImgPlay";



// /**
//  * @typedef {import("@prismicio/client").Content.BandicootImageSequenceSlice} BandicootImageSequenceSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<BandicootImageSequenceSlice>} BandicootImageSequenceProps
//  * @param {BandicootImageSequenceProps}
//  */
// export default function BandicootImageSequence({slice}) {

//    created image, added the frame and load it to the canvas
  
//   useEffect(() => {
  
//   const html = document.documentElement;  getting our html document

//   const canvas = document.querySelector('.bandicoot-scrolling');  getting out canvas 

//   const context = canvas.getContext('2d');  getting context

//    Consists of multiple frames to create the animation
//    Create a function for currentFrame

//   const currentFrame = (index) => (
//        returning the url of the image
//        convert to string 
//         `https:www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
//         `/imgsequence/PNG SEQUENCE/${index.toString().padStart(4, '0')}.png`
//         `/imgsequence/jpgFormat/${index.toString().padStart(4, '0')}.jpg`
//        `/imgsequence/original/${index.toString().padStart(3, '0')}.webp` 
//   )


//    create variable for the number of frames/image
//   const frameCount = 100;  100 frames/still images

//    canvas setup 
//    height and width of the image
//   canvas.height = 1080;
//   canvas.width = 1920;

//   new code [DID NOT WORK AT ALL]
//      const images = []  image of empty array
//      const bandicoot ={ 
//        frame: 0        object of frame 0
//      };

//      for (let i = 0; i < frameCount; i++) {  rendering frames onto the canvas
//        const img = new Image();
//        img.src = currentFrame(i);
//        images.push(img);
//      }

//      gsap implementation
//       gsap.to(bandicoot, {
//        frame: frameCount - 1,
//        snap: 'frame',
//        scrollTrigger: {
//          scrub: 0.,
//          trigger: '#img_Sequence',
//          start:'top top',
//          pin: true
//        },
//        onUpdate: render
//      });

//      images[0].onload = render;

//      function render() {
//        ctx.canvas.width = ctx.canvas.width
//        ctx.drawImage(images[bandicoot.frame], 0, 0);
//      }
//   ---------


//    generate an image
//    const img = new Image(); 
//    dynamically calling the img source from the currentFrame function
//    img.src = currentFrame(1); 

//    loading the image onto the canvas
//   img.onload = function() {
//   context.drawImage(img, 0, 0)   0, 0 = x & y values
//   }

//   create a function to update the img on scroll
//   const updateImage = (index) => {
//     img.src = currentFrame(index);  source of the img is the currentFrame index which will be updated

//     context.drawImage(img, 0, 0);  every time the img is updated it is being rendered again in the canvas
//   }


//    update with scroll  must modify here for for scroll trigger
//   window.addEventListener('scroll', () => {
//      getting the scrollTop value
//     const scrollTop = html.scrollTop;
//     const maxScrollTop = html.scrollHeight - window.innerHeight;  getting the maxscrollheight;/ maximum value the user can scroll

//     const scrollFraction = scrollTop / maxScrollTop;  scroll progress

//      const frameIndex = Math.min(frameCount- 1, Math.floor(scrollFraction * frameCount));

//      update image

//       requestAnimationFrame( () => updateImage(frameIndex + 1));

//     })

//    pre-load the image and smoother animation
//     const preloadImages = () => {
//       for (let i = 1; i< frameCount; i++) {
//         const img = new Image();
//         img.src = currentFrame(i);
//       }
//     };

//     preloadImages();


//     IN-VIEW [ from top ]
//     const inView = new IntersectionObserver((entries) => {
//      entries.forEach(entry => {
//        if(entry.isIntersecting) {
//          document.getElementById("img_Sequence").className = "bandicoot-scrolling-inview";
//        }
//      })
//     },{threshold: 0.98})
//     inView.observe(document.getElementById("img_Sequence"))
//    ------------------------------------------------------

//    out of view [ from bottom ]
//      const observer = new IntersectionObserver((entries) => {
//        entries.forEach(entry => {
//          if(entry.isIntersecting) {
//            document.getElementById("img_Sequence").className = "bandicoot-scrolling";
//          }
//        })
//      }, {threshold: 0.2})
//      observer.observe(document.getElementById("heroabout"));

//     out of view
//      const universalObserver = new IntersectionObserver((entries) => {
//        entries.forEach(entry => {
//          if(entry.isIntersecting) {
//            document.getElementById("img_Sequence").className = "bandicoot-scrolling-out-view";
//          }
//        })
//      })
//      universalObserver.observe(document.getElementById("safe"));

//   }, [])

  
//   return(
//     <>
//       <section className='bandicootImageSequence' id="blink" style={{backgroundColor:'#FFFFF'}}>
//         <div className='bandicootImageSequence_Container'>
//         <canvas className="bandicoot-scrolling" id="img_Sequence" />
//       </section>
//     </>
//   )
// }
// const imageLinks = [
//   '/imgsequence/original/010.webp',
//   '/imgsequence/original/011.webp',
//   '/imgsequence/original/012.webp',
//   '/imgsequence/original/013.webp',
//   '/imgsequence/original/014.webp',
//   '/imgsequence/original/015.webp',
//   '/imgsequence/original/016.webp',
//   '/imgsequence/original/017.webp',
//   '/imgsequence/original/018.webp',
//   '/imgsequence/original/019.webp',
//   '/imgsequence/original/020.webp',
//   '/imgsequence/original/021.webp',
//   '/imgsequence/original/022.webp',
//   '/imgsequence/original/023.webp',
//   '/imgsequence/original/024.webp',
//   '/imgsequence/original/025.webp',
//   '/imgsequence/original/026.webp',
//   '/imgsequence/original/027.webp',
//   '/imgsequence/original/028.webp',
//   '/imgsequence/original/029.webp',
//   '/imgsequence/original/030.webp',
//   '/imgsequence/original/031.webp',
//   '/imgsequence/original/032.webp',
//   '/imgsequence/original/033.webp',
//   '/imgsequence/original/034.webp',
//   '/imgsequence/original/035.webp',
//   '/imgsequence/original/036.webp',
//   '/imgsequence/original/037.webp',
//   '/imgsequence/original/038.webp',
//   '/imgsequence/original/039.webp',
//   '/imgsequence/original/040.webp',
//   '/imgsequence/original/041.webp',
//   '/imgsequence/original/042.webp',
//   '/imgsequence/original/043.webp',
//   '/imgsequence/original/044.webp',
//   '/imgsequence/original/045.webp',
//   '/imgsequence/original/046.webp',
//   '/imgsequence/original/047.webp',
//   '/imgsequence/original/048.webp',
//   '/imgsequence/original/049.webp',
//   '/imgsequence/original/050.webp',
//   '/imgsequence/original/051.webp',
//   '/imgsequence/original/052.webp',
//   '/imgsequence/original/053.webp',
//   '/imgsequence/original/054.webp',
//   '/imgsequence/original/055.webp',
//   '/imgsequence/original/056.webp',
//   '/imgsequence/original/057.webp',
//   '/imgsequence/original/058.webp',
//   '/imgsequence/original/059.webp',
//   '/imgsequence/original/060.webp',
//   '/imgsequence/original/061.webp',
//   '/imgsequence/original/062.webp',
//   '/imgsequence/original/063.webp',
//   '/imgsequence/original/064.webp',
//   '/imgsequence/original/065.webp',
//   '/imgsequence/original/066.webp',
//   '/imgsequence/original/067.webp',
//   '/imgsequence/original/068.webp',
//   '/imgsequence/original/069.webp',
//   '/imgsequence/original/070.webp',
//   '/imgsequence/original/071.webp',
//   '/imgsequence/original/072.webp',
//   '/imgsequence/original/073.webp',
//   '/imgsequence/original/074.webp',
//   '/imgsequence/original/075.webp',
//   '/imgsequence/original/076.webp',
//   '/imgsequence/original/077.webp',
//   '/imgsequence/original/078.webp',
//   '/imgsequence/original/079.webp',
//   '/imgsequence/original/080.webp',
//   '/imgsequence/original/081.webp',
//   '/imgsequence/original/082.webp',
//   '/imgsequence/original/083.webp',
//   '/imgsequence/original/084.webp',
//   '/imgsequence/original/085.webp',
//   '/imgsequence/original/086.webp',
//   '/imgsequence/original/087.webp',
//   '/imgsequence/original/088.webp',
//   '/imgsequence/original/089.webp',
//   '/imgsequence/original/090.webp',
//   '/imgsequence/original/091.webp',
//   '/imgsequence/original/092.webp',
//   '/imgsequence/original/093.webp',
//   '/imgsequence/original/094.webp',
//   '/imgsequence/original/095.webp',
//   '/imgsequence/original/096.webp',
//   '/imgsequence/original/097.webp',
//   '/imgsequence/original/098.webp',
//   '/imgsequence/original/099.webp',
//   '/imgsequence/original/100.webp',
//   '/imgsequence/original/101.webp',
//   '/imgsequence/original/102.webp',
//   '/imgsequence/original/103.webp',
//   '/imgsequence/original/104.webp',
//   '/imgsequence/original/105.webp',
//   '/imgsequence/original/106.webp',
//   '/imgsequence/original/107.webp',
//   '/imgsequence/original/108.webp',
//   '/imgsequence/original/109.webp',
//   ]
  
  // const texts = [
  //   {
  //     id: "one",
  //     text: "One",
  //     startFrame: 20,
  //     endFrame: 40
  //   },
  //   {
  //     id: "two",
  //     text: "Two",
  //     startFrame: 50,
  //     endFrame: 70
  //   },
  //   {
  //     id: "three",
  //     text: "Three",
  //     startFrame: 80,
  //     endFrame: 99
  //   }
  // ]

  const imageLinks = [ 
    '/imgsequence/Updated/0001 (1).webp',
    '/imgsequence/Updated/0002 (1).webp',
    '/imgsequence/Updated/0003 (1).webp',
    '/imgsequence/Updated/0004 (1).webp',
    '/imgsequence/Updated/0005 (1).webp',
    '/imgsequence/Updated/0006 (1).webp',
    '/imgsequence/Updated/0007 (1).webp',
    '/imgsequence/Updated/0008 (1).webp',
    '/imgsequence/Updated/0009 (1).webp',
    '/imgsequence/Updated/0010 (1).webp',
    '/imgsequence/Updated/0011 (1).webp',
    '/imgsequence/Updated/0012 (1).webp',
    '/imgsequence/Updated/0013 (1).webp',
    '/imgsequence/Updated/0014 (1).webp',
    '/imgsequence/Updated/0015 (1).webp',
    '/imgsequence/Updated/0016 (1).webp',
    '/imgsequence/Updated/0017 (1).webp',
    '/imgsequence/Updated/0018 (1).webp',
    '/imgsequence/Updated/0019 (1).webp',
    '/imgsequence/Updated/0020 (1).webp',
    '/imgsequence/Updated/0021 (1).webp',
    '/imgsequence/Updated/0022 (1).webp',
    '/imgsequence/Updated/0023 (1).webp',
    '/imgsequence/Updated/0024 (1).webp',
    '/imgsequence/Updated/0025 (1).webp',
    '/imgsequence/Updated/0026 (1).webp',
    '/imgsequence/Updated/0027 (1).webp',
    '/imgsequence/Updated/0028 (1).webp',
    '/imgsequence/Updated/0029 (1).webp',
    '/imgsequence/Updated/0030 (1).webp',
    '/imgsequence/Updated/0031 (1).webp',
    '/imgsequence/Updated/0032 (1).webp',
    '/imgsequence/Updated/0033 (1).webp',
    '/imgsequence/Updated/0034 (1).webp',
    '/imgsequence/Updated/0035 (1).webp',
    '/imgsequence/Updated/0036 (1).webp',
    '/imgsequence/Updated/0037 (1).webp',
    '/imgsequence/Updated/0038 (1).webp',
    '/imgsequence/Updated/0039 (1).webp',
    '/imgsequence/Updated/0040 (1).webp',
    '/imgsequence/Updated/0041 (1).webp',
    '/imgsequence/Updated/0042 (1).webp',
    '/imgsequence/Updated/0043 (1).webp',
    '/imgsequence/Updated/0044 (1).webp',
    '/imgsequence/Updated/0045 (1).webp',
    '/imgsequence/Updated/0046 (1).webp',
    '/imgsequence/Updated/0047 (1).webp',
    '/imgsequence/Updated/0048 (1).webp',
    '/imgsequence/Updated/0049 (1).webp',
    '/imgsequence/Updated/0050 (1).webp',
    '/imgsequence/Updated/0051 (1).webp',
    '/imgsequence/Updated/0052 (1).webp',
    '/imgsequence/Updated/0053 (1).webp',
    '/imgsequence/Updated/0054 (1).webp',
    '/imgsequence/Updated/0055 (1).webp',
    '/imgsequence/Updated/0056 (1).webp',
    '/imgsequence/Updated/0057 (1).webp',
    '/imgsequence/Updated/0058 (1).webp',
    '/imgsequence/Updated/0059 (1).webp',
    '/imgsequence/Updated/0060 (1).webp',
    '/imgsequence/Updated/0061 (1).webp', 
    '/imgsequence/Updated/0062 (1).webp',
    '/imgsequence/Updated/0063 (1).webp',
    '/imgsequence/Updated/0064 (1).webp',
    '/imgsequence/Updated/0065 (1).webp',
    '/imgsequence/Updated/0066 (1).webp',
    '/imgsequence/Updated/0067 (1).webp',
    '/imgsequence/Updated/0068 (1).webp',
    '/imgsequence/Updated/0069 (1).webp',
    '/imgsequence/Updated/0070 (1).webp',
    '/imgsequence/Updated/0071 (1).webp',
    '/imgsequence/Updated/0072 (1).webp',
    '/imgsequence/Updated/0073 (1).webp',
    '/imgsequence/Updated/0074 (1).webp',
    '/imgsequence/Updated/0075 (1).webp',
    '/imgsequence/Updated/0076 (1).webp',
    '/imgsequence/Updated/0077 (1).webp',
    '/imgsequence/Updated/0078 (1).webp',
    '/imgsequence/Updated/0079 (1).webp',
    '/imgsequence/Updated/0080 (1).webp',
    '/imgsequence/Updated/0081 (1).webp',
    '/imgsequence/Updated/0082 (1).webp',
    '/imgsequence/Updated/0083 (1).webp',
    '/imgsequence/Updated/0084 (1).webp',
    '/imgsequence/Updated/0085 (1).webp',
    '/imgsequence/Updated/0086 (1).webp',
    '/imgsequence/Updated/0087 (1).webp',
    '/imgsequence/Updated/0088 (1).webp',
    '/imgsequence/Updated/0089 (1).webp',
    '/imgsequence/Updated/0090 (1).webp',
    '/imgsequence/Updated/0091 (1).webp',
    '/imgsequence/Updated/0092 (1).webp',
    '/imgsequence/Updated/0093 (1).webp',
    '/imgsequence/Updated/0094 (1).webp',
    '/imgsequence/Updated/0095 (1).webp',
    '/imgsequence/Updated/0096 (1).webp',
    '/imgsequence/Updated/0097 (1).webp',
    '/imgsequence/Updated/0098 (1).webp',
    '/imgsequence/Updated/0099 (1).webp',
    '/imgsequence/Updated/0100 (1).webp',
  ]


export default function BandicootImageSequence(){
  return(
    <>
    <ImagePlay frameCount={100} travelPixel={3000} imageLinks={imageLinks} />
    </>
  )
}