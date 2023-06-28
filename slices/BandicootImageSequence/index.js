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
const imageLinks = [
  // '/imgsequence/productPage/0000.webp',
  // '/imgsequence/productPage/0001.webp',
  // '/imgsequence/productPage/0002.webp',
  // '/imgsequence/productPage/0003.webp',
  // '/imgsequence/productPage/0004.webp',
  // '/imgsequence/productPage/0005.webp',
  // '/imgsequence/productPage/0006.webp',
  // '/imgsequence/productPage/0007.webp',
  // '/imgsequence/productPage/0008.webp',
  // '/imgsequence/productPage/0009.webp',
  // '/imgsequence/productPage/0010.webp',
  // '/imgsequence/productPage/0011.webp',
  // '/imgsequence/productPage/0012.webp',
  // '/imgsequence/productPage/0013.webp',
  // '/imgsequence/productPage/0014.webp',
  // '/imgsequence/productPage/0015.webp',
  // '/imgsequence/productPage/0016.webp',
  // '/imgsequence/productPage/0017.webp',
  // '/imgsequence/productPage/0018.webp',
  // '/imgsequence/productPage/0019.webp',
  // '/imgsequence/productPage/0020.webp',
  // '/imgsequence/productPage/0021.webp',
  // '/imgsequence/productPage/0022.webp',
  // '/imgsequence/productPage/0023.webp',
  // '/imgsequence/productPage/0024.webp',
  // '/imgsequence/productPage/0025.webp',
  // '/imgsequence/productPage/0026.webp',
  // '/imgsequence/productPage/0027.webp',
  // '/imgsequence/productPage/0028.webp',
  // '/imgsequence/productPage/0029.webp',
  // '/imgsequence/productPage/0030.webp',
  // '/imgsequence/productPage/0031.webp',
  // '/imgsequence/productPage/0032.webp',
  // '/imgsequence/productPage/0033.webp',
  // '/imgsequence/productPage/0034.webp',
  // '/imgsequence/productPage/0035.webp',
  // '/imgsequence/productPage/0036.webp', 
  // '/imgsequence/productPage/0037.webp',
  // '/imgsequence/productPage/0038.webp',
  // '/imgsequence/productPage/0039.webp',
  // '/imgsequence/productPage/0040.webp',
  // '/imgsequence/productPage/0041.webp',
  // '/imgsequence/productPage/0042.webp',
  // '/imgsequence/productPage/0043.webp',
  // '/imgsequence/productPage/0044.webp',
  // '/imgsequence/productPage/0045.webp',
  // '/imgsequence/productPage/0046.webp',
  // '/imgsequence/productPage/0047.webp',
  // '/imgsequence/productPage/0048.webp',
  // '/imgsequence/productPage/0049.webp',
  // '/imgsequence/productPage/0050.webp',
  // '/imgsequence/productPage/0051.webp',
  // '/imgsequence/productPage/0052.webp',
  // '/imgsequence/productPage/0053.webp',
  // '/imgsequence/productPage/0054.webp',
  // '/imgsequence/productPage/0055.webp',
  // '/imgsequence/productPage/0056.webp',
  // '/imgsequence/productPage/0057.webp',
  // '/imgsequence/productPage/0058.webp',
  // '/imgsequence/productPage/0059.webp',
  // '/imgsequence/productPage/0060.webp',
  // '/imgsequence/productPage/0061.webp',
  // '/imgsequence/productPage/0062.webp',
  // '/imgsequence/productPage/0063.webp',
  // '/imgsequence/productPage/0064.webp',
  // '/imgsequence/productPage/0065.webp',
  // '/imgsequence/productPage/0066.webp',
  // '/imgsequence/productPage/0067.webp',
  // '/imgsequence/productPage/0068.webp',
  // '/imgsequence/productPage/0069.webp',
  // '/imgsequence/productPage/0070.webp',
  // '/imgsequence/productPage/0071.webp',
  // '/imgsequence/productPage/0072.webp',
  // '/imgsequence/productPage/0073.webp',
  // '/imgsequence/productPage/0074.webp',
  // '/imgsequence/productPage/0075.webp',
  // '/imgsequence/productPage/0076.webp',
  // '/imgsequence/productPage/0077.webp',
  // '/imgsequence/productPage/0078.webp',
  // '/imgsequence/productPage/0079.webp',
  // '/imgsequence/productPage/0080.webp',
  // '/imgsequence/productPage/0081.webp',
  // '/imgsequence/productPage/0082.webp',
  // '/imgsequence/productPage/0083.webp',
  // '/imgsequence/productPage/0084.webp',
  // '/imgsequence/productPage/0085.webp',
  // '/imgsequence/productPage/0086.webp',
  // '/imgsequence/productPage/0087.webp',
  // '/imgsequence/productPage/0088.webp',
  // '/imgsequence/productPage/0089.webp',
  // '/imgsequence/productPage/0090.webp',
  // '/imgsequence/productPage/0091.webp',
  // '/imgsequence/productPage/0092.webp',
  // '/imgsequence/productPage/0093.webp',
  // '/imgsequence/productPage/0094.webp',
  // '/imgsequence/productPage/0095.webp',
  // '/imgsequence/productPage/0096.webp',
  // '/imgsequence/productPage/0097.webp',
  // '/imgsequence/productPage/0098.webp',
  // '/imgsequence/productPage/0099.webp',
  // '/imgsequence/productPage/0100.webp',
  // '/imgsequence/productPage/0101.webp',
  // '/imgsequence/productPage/0102.webp',
  // '/imgsequence/productPage/0103.webp',
  // '/imgsequence/productPage/0104.webp',
  // '/imgsequence/productPage/0105.webp',
  // '/imgsequence/productPage/0106.webp',
  // '/imgsequence/productPage/0107.webp',
  // '/imgsequence/productPage/0108.webp',
  // '/imgsequence/productPage/0109.webp',
  // '/imgsequence/productPage/0110.webp',
  // '/imgsequence/productPage/0111.webp',
  // '/imgsequence/productPage/0112.webp',
  // '/imgsequence/productPage/0113.webp',
  // '/imgsequence/productPage/0114.webp',
  // '/imgsequence/productPage/0115.webp',
  // '/imgsequence/productPage/0116.webp',
  // '/imgsequence/productPage/0117.webp',
  // '/imgsequence/productPage/0118.webp',
  // '/imgsequence/productPage/0119.webp',
  // '/imgsequence/productPage/0120.webp',
  // '/imgsequence/productPage/0121.webp',
  // '/imgsequence/productPage/0122.webp',
  // '/imgsequence/productPage/0123.webp',
  // '/imgsequence/productPage/0124.webp',
  // '/imgsequence/productPage/0125.webp',
  // '/imgsequence/productPage/0126.webp',
  // '/imgsequence/productPage/0127.webp',
  // '/imgsequence/productPage/0128.webp',
  // '/imgsequence/productPage/0129.webp',
  // '/imgsequence/productPage/0130.webp',
  // '/imgsequence/productPage/0131.webp',
  // '/imgsequence/productPage/0132.webp',
  // '/imgsequence/productPage/0133.webp',
  // '/imgsequence/productPage/0134.webp',
  // '/imgsequence/productPage/0135.webp',
  // '/imgsequence/productPage/0136.webp',
  // '/imgsequence/productPage/0137.webp',
  // '/imgsequence/productPage/0138.webp',
  // '/imgsequence/productPage/0139.webp',
  // '/imgsequence/productPage/0140.webp',
  // '/imgsequence/productPage/0141.webp',
  // '/imgsequence/productPage/0142.webp',
  // '/imgsequence/productPage/0143.webp',
  // '/imgsequence/productPage/0144.webp',
  // '/imgsequence/productPage/0145.webp',
  // '/imgsequence/productPage/0146.webp',
  // '/imgsequence/productPage/0147.webp',
  // '/imgsequence/productPage/0148.webp',
  // '/imgsequence/productPage/0149.webp',
  // '/imgsequence/productPage/0150.webp',
  // '/imgsequence/productPage/0151.webp',
  // '/imgsequence/productPage/0152.webp',
  // '/imgsequence/productPage/0153.webp',
  // '/imgsequence/productPage/0154.webp',
  // '/imgsequence/productPage/0155.webp',
  // '/imgsequence/productPage/0156.webp',
  // '/imgsequence/productPage/0157.webp',
  // '/imgsequence/productPage/0158.webp',
  // '/imgsequence/productPage/0159.webp',
  // '/imgsequence/productPage/0160.webp',
  // '/imgsequence/productPage/0161.webp',
  // '/imgsequence/productPage/0162.webp',
  // '/imgsequence/productPage/0163.webp',
  // '/imgsequence/productPage/0164.webp',
  // '/imgsequence/productPage/0165.webp',
  // '/imgsequence/productPage/0166.webp',
  // '/imgsequence/productPage/0167.webp',
  // '/imgsequence/productPage/0168.webp',
  // '/imgsequence/productPage/0169.webp',
  // '/imgsequence/productPage/0170.webp',
  // '/imgsequence/productPage/0171.webp',
  // '/imgsequence/productPage/0172.webp',
  // '/imgsequence/productPage/0173.webp',
  // '/imgsequence/productPage/0174.webp',
  // '/imgsequence/productPage/0175.webp',
  // '/imgsequence/productPage/0176.webp',
  // '/imgsequence/productPage/0177.webp',
  // '/imgsequence/productPage/0178.webp',
  // '/imgsequence/productPage/0179.webp',
  // '/imgsequence/productPage/0180.webp',
  // '/imgsequence/productPage/0181.webp',
  // '/imgsequence/productPage/0182.webp',
  // '/imgsequence/productPage/0183.webp',
  // '/imgsequence/productPage/0184.webp',
  // '/imgsequence/productPage/0185.webp',
  // '/imgsequence/productPage/0186.webp',
  // '/imgsequence/productPage/0187.webp',
  // '/imgsequence/productPage/0188.webp',
  // '/imgsequence/productPage/0189.webp',
  // '/imgsequence/productPage/0190.webp',
  // '/imgsequence/productPage/0191.webp',
  // '/imgsequence/productPage/0192.webp',
  // '/imgsequence/productPage/0193.webp',
  // '/imgsequence/productPage/0194.webp',
  // '/imgsequence/productPage/0195.webp',
  // '/imgsequence/productPage/0196.webp',
  // '/imgsequence/productPage/0197.webp',
  // '/imgsequence/productPage/0198.webp',
  // '/imgsequence/productPage/0199.webp',
  // '/imgsequence/productPage/0200.webp',
  // '/imgsequence/productPage/0201.webp',
  // '/imgsequence/productPage/0202.webp',
  // '/imgsequence/productPage/0203.webp',
  // '/imgsequence/productPage/0204.webp',
  // '/imgsequence/productPage/0205.webp',
  // '/imgsequence/productPage/0206.webp',
  // '/imgsequence/productPage/0207.webp',
  // '/imgsequence/productPage/0208.webp',
  // '/imgsequence/productPage/0209.webp',
  // '/imgsequence/productPage/0210.webp',
  // '/imgsequence/productPage/0211.webp',
  // '/imgsequence/productPage/0212.webp',
  // '/imgsequence/productPage/0213.webp',
  // '/imgsequence/productPage/0214.webp',
  // '/imgsequence/productPage/0215.webp',
  // '/imgsequence/productPage/0216.webp',
  // '/imgsequence/productPage/0217.webp',
  // '/imgsequence/productPage/0218.webp',
  // '/imgsequence/productPage/0219.webp',
  // '/imgsequence/productPage/0220.webp',
  // '/imgsequence/productPage/0221.webp',
  // '/imgsequence/productPage/0222.webp',
  // '/imgsequence/productPage/0223.webp',
  // '/imgsequence/productPage/0224.webp',
  // '/imgsequence/productPage/0225.webp',
  // '/imgsequence/productPage/0226.webp',
  // '/imgsequence/productPage/0227.webp',
  // '/imgsequence/productPage/0228.webp',
  // '/imgsequence/productPage/0229.webp',
  // '/imgsequence/productPage/0230.webp',
  // '/imgsequence/productPage/0231.webp',
  // '/imgsequence/productPage/0232.webp',
  // '/imgsequence/productPage/0233.webp',
  // '/imgsequence/productPage/0234.webp',
  // '/imgsequence/productPage/0235.webp',
  // '/imgsequence/productPage/0236.webp',
  // '/imgsequence/productPage/0237.webp',
  // '/imgsequence/productPage/0238.webp',
  // '/imgsequence/productPage/0239.webp',
  // '/imgsequence/productPage/0240.webp',
  // '/imgsequence/productPage/0241.webp',
  // '/imgsequence/productPage/0242.webp',
  // '/imgsequence/productPage/0243.webp',
  // '/imgsequence/productPage/0244.webp',
  // '/imgsequence/productPage/0245.webp',
  // '/imgsequence/productPage/0246.webp',
  // '/imgsequence/productPage/0247.webp',
  // '/imgsequence/productPage/0248.webp',
  // '/imgsequence/productPage/0249.webp',
  // '/imgsequence/productPage/0250.webp',
  // '/imgsequence/productPage/0251.webp',
  // '/imgsequence/productPage/0252.webp',
  // '/imgsequence/productPage/0253.webp',
  // '/imgsequence/productPage/0254.webp',
  // '/imgsequence/productPage/0255.webp',
  // '/imgsequence/productPage/0256.webp',
  // '/imgsequence/productPage/0257.webp',
  // '/imgsequence/productPage/0258.webp',
  // '/imgsequence/productPage/0259.webp',
  // '/imgsequence/productPage/0260.webp',
  // '/imgsequence/productPage/0261.webp',
  // '/imgsequence/productPage/0262.webp',
  // '/imgsequence/productPage/0263.webp',
  // '/imgsequence/productPage/0264.webp',
  // '/imgsequence/productPage/0265.webp',
  // '/imgsequence/productPage/0266.webp',
  // '/imgsequence/productPage/0267.webp',
  // '/imgsequence/productPage/0268.webp',
  // '/imgsequence/productPage/0269.webp',
  // '/imgsequence/productPage/0270.webp',
  // '/imgsequence/productPage/0271.webp',
  // '/imgsequence/productPage/0272.webp',
  // '/imgsequence/productPage/0273.webp',
  // '/imgsequence/productPage/0274.webp',
  // '/imgsequence/productPage/0275.webp',
  // '/imgsequence/productPage/0276.webp',
  // '/imgsequence/productPage/0277.webp',
  // '/imgsequence/productPage/0278.webp',
  // '/imgsequence/productPage/0279.webp',
  // '/imgsequence/productPage/0280.webp',
  // '/imgsequence/productPage/0281.webp',
  // '/imgsequence/productPage/0282.webp',
  // '/imgsequence/productPage/0283.webp',
  // '/imgsequence/productPage/0284.webp',
  // '/imgsequence/productPage/0285.webp',
  // '/imgsequence/productPage/0286.webp',
  // '/imgsequence/productPage/0287.webp',
  // '/imgsequence/productPage/0288.webp',
  // '/imgsequence/productPage/0289.webp',
  // '/imgsequence/productPage/0290.webp',
  // '/imgsequence/productPage/0291.webp',
  // '/imgsequence/productPage/0292.webp',
  // '/imgsequence/productPage/0293.webp',
  // '/imgsequence/productPage/0294.webp',
  // '/imgsequence/productPage/0295.webp', 
  // '/imgsequence/productPage/0296.webp',
  // '/imgsequence/productPage/0297.webp',
  // '/imgsequence/productPage/0298.webp',
  // '/imgsequence/productPage/0299.webp',
  // '/imgsequence/productPage/0300.webp',
  // '/imgsequence/productPage/0301.webp',
  // '/imgsequence/productPage/0302.webp',
  // '/imgsequence/productPage/0303.webp',
  // '/imgsequence/productPage/0304.webp',
  // '/imgsequence/productPage/0305.webp',
  // '/imgsequence/productPage/0306.webp',
  // '/imgsequence/productPage/0307.webp',
  // '/imgsequence/productPage/0308.webp',
  // '/imgsequence/productPage/0309.webp',
  // '/imgsequence/productPage/0310.webp',
  // '/imgsequence/productPage/0311.webp',
  // '/imgsequence/productPage/0312.webp',
  // '/imgsequence/productPage/0313.webp',
  // '/imgsequence/productPage/0314.webp',
  // '/imgsequence/productPage/0315.webp',
  // '/imgsequence/productPage/0316.webp',
  // '/imgsequence/productPage/0317.webp',
  // '/imgsequence/productPage/0318.webp',
  // '/imgsequence/productPage/0319.webp',
  // '/imgsequence/productPage/0320.webp',
  // '/imgsequence/productPage/0321.webp',
  // '/imgsequence/productPage/0322.webp',
  // '/imgsequence/productPage/0323.webp',
  // '/imgsequence/productPage/0324.webp',
  // '/imgsequence/productPage/0325.webp',
  // '/imgsequence/productPage/0326.webp',
  // '/imgsequence/productPage/0327.webp',
  // '/imgsequence/productPage/0328.webp',
  // '/imgsequence/productPage/0329.webp',
  // '/imgsequence/productPage/0330.webp',
  // '/imgsequence/productPage/0331.webp',
  // '/imgsequence/productPage/0332.webp',
  // '/imgsequence/productPage/0333.webp',
  // '/imgsequence/productPage/0334.webp',
  // '/imgsequence/productPage/0335.webp',
  // '/imgsequence/productPage/0336.webp',
  // '/imgsequence/productPage/0337.webp',
  // '/imgsequence/productPage/0338.webp', 
  // '/imgsequence/productPage/0339.webp',
  // '/imgsequence/productPage/0340.webp',
  // '/imgsequence/productPage/0341.webp',
  // '/imgsequence/productPage/0342.webp',
  // '/imgsequence/productPage/0343.webp',
  // '/imgsequence/productPage/0344.webp',
  // '/imgsequence/productPage/0345.webp',
  // '/imgsequence/productPage/0346.webp',
  // '/imgsequence/productPage/0347.webp',
  // '/imgsequence/productPage/0348.webp',
  // '/imgsequence/productPage/0349.webp',
  // '/imgsequence/productPage/0350.webp',
  // '/imgsequence/productPage/0351.webp',
  // '/imgsequence/productPage/0352.webp',
  // '/imgsequence/productPage/0353.webp',
  // '/imgsequence/productPage/0354.webp',
  // '/imgsequence/productPage/0355.webp',
  // '/imgsequence/productPage/0356.webp',
  // '/imgsequence/productPage/0357.webp',
  // '/imgsequence/productPage/0358.webp',
  // '/imgsequence/productPage/0359.webp',
  // '/imgsequence/productPage/0360.webp',
  // '/imgsequence/productPage/0361.webp',
  // '/imgsequence/productPage/0362.webp',
  // '/imgsequence/productPage/0363.webp',
  // '/imgsequence/productPage/0364.webp',
  // '/imgsequence/productPage/0365.webp',
  // '/imgsequence/productPage/0366.webp',
  // '/imgsequence/productPage/0367.webp',
  // '/imgsequence/productPage/0368.webp',
  // '/imgsequence/productPage/0369.webp',
  // '/imgsequence/productPage/0370.webp',
  // '/imgsequence/productPage/0371.webp',
  // '/imgsequence/productPage/0372.webp',
  // '/imgsequence/productPage/0373.webp',
  // '/imgsequence/productPage/0374.webp',
  // '/imgsequence/productPage/0375.webp',
  // '/imgsequence/productPage/0376.webp',
  // '/imgsequence/productPage/0377.webp',
  // '/imgsequence/productPage/0378.webp',
  // '/imgsequence/productPage/0379.webp',
  // '/imgsequence/productPage/0380.webp',
  // '/imgsequence/productPage/0381.webp',
  // '/imgsequence/productPage/0382.webp',
  // '/imgsequence/productPage/0383.webp',
  // '/imgsequence/productPage/0384.webp',
  // '/imgsequence/productPage/0385.webp',
  // '/imgsequence/productPage/0386.webp',
  // '/imgsequence/productPage/0387.webp',
  // '/imgsequence/productPage/0388.webp',
  // '/imgsequence/productPage/0389.webp',
  // '/imgsequence/productPage/0390.webp',
  // '/imgsequence/productPage/0391.webp',
  // '/imgsequence/productPage/0392.webp',
  // '/imgsequence/productPage/0393.webp',
  // '/imgsequence/productPage/0394.webp',
  // '/imgsequence/productPage/0395.webp',
  // '/imgsequence/productPage/0396.webp',
  // '/imgsequence/productPage/0397.webp',
  // '/imgsequence/productPage/0398.webp',
  // '/imgsequence/productPage/0399.webp',
  // '/imgsequence/productPage/0400.webp',
  // '/imgsequence/productPage/0401.webp',
  // '/imgsequence/productPage/0402.webp',
  // '/imgsequence/productPage/0403.webp',
  // '/imgsequence/productPage/0404.webp',
  // '/imgsequence/productPage/0405.webp',
  // '/imgsequence/productPage/0406.webp',
  // '/imgsequence/productPage/0407.webp',
  // '/imgsequence/productPage/0408.webp',
  // '/imgsequence/productPage/0409.webp',
  // '/imgsequence/productPage/0410.webp',
  // '/imgsequence/productPage/0411.webp',
  // '/imgsequence/productPage/0412.webp',
  // '/imgsequence/productPage/0413.webp',
  // '/imgsequence/productPage/0414.webp',
  // '/imgsequence/productPage/0415.webp',
  // '/imgsequence/productPage/0416.webp',
  // '/imgsequence/productPage/0417.webp',
  // '/imgsequence/productPage/0418.webp',
  // '/imgsequence/productPage/0419.webp',
  // '/imgsequence/productPage/0420.webp',

  '/imgsequence/original/010.webp',
  '/imgsequence/original/011.webp',
  '/imgsequence/original/012.webp',
  '/imgsequence/original/013.webp',
  '/imgsequence/original/014.webp',
  '/imgsequence/original/015.webp',
  '/imgsequence/original/016.webp',
  '/imgsequence/original/017.webp',
  '/imgsequence/original/018.webp',
  '/imgsequence/original/019.webp',
  '/imgsequence/original/020.webp',
  '/imgsequence/original/021.webp',
  '/imgsequence/original/022.webp',
  '/imgsequence/original/023.webp',
  '/imgsequence/original/024.webp',
  '/imgsequence/original/025.webp',
  '/imgsequence/original/026.webp',
  '/imgsequence/original/027.webp',
  '/imgsequence/original/028.webp',
  '/imgsequence/original/029.webp',
  '/imgsequence/original/030.webp',
  '/imgsequence/original/031.webp',
  '/imgsequence/original/032.webp',
  '/imgsequence/original/033.webp',
  '/imgsequence/original/034.webp',
  '/imgsequence/original/035.webp',
  '/imgsequence/original/036.webp',
  '/imgsequence/original/037.webp',
  '/imgsequence/original/038.webp',
  '/imgsequence/original/039.webp',
  '/imgsequence/original/040.webp',
  '/imgsequence/original/041.webp',
  '/imgsequence/original/042.webp',
  '/imgsequence/original/043.webp',
  '/imgsequence/original/044.webp',
  '/imgsequence/original/045.webp',
  '/imgsequence/original/046.webp',
  '/imgsequence/original/047.webp',
  '/imgsequence/original/048.webp',
  '/imgsequence/original/049.webp',
  '/imgsequence/original/050.webp',
  '/imgsequence/original/051.webp',
  '/imgsequence/original/052.webp',
  '/imgsequence/original/053.webp',
  '/imgsequence/original/054.webp',
  '/imgsequence/original/055.webp',
  '/imgsequence/original/056.webp',
  '/imgsequence/original/057.webp',
  '/imgsequence/original/058.webp',
  '/imgsequence/original/059.webp',
  '/imgsequence/original/060.webp',
  '/imgsequence/original/061.webp',
  '/imgsequence/original/062.webp',
  '/imgsequence/original/063.webp',
  '/imgsequence/original/064.webp',
  '/imgsequence/original/065.webp',
  '/imgsequence/original/066.webp',
  '/imgsequence/original/067.webp',
  '/imgsequence/original/068.webp',
  '/imgsequence/original/069.webp',
  '/imgsequence/original/070.webp',
  '/imgsequence/original/071.webp',
  '/imgsequence/original/072.webp',
  '/imgsequence/original/073.webp',
  '/imgsequence/original/074.webp',
  '/imgsequence/original/075.webp',
  '/imgsequence/original/076.webp',
  '/imgsequence/original/077.webp',
  '/imgsequence/original/078.webp',
  '/imgsequence/original/079.webp',
  '/imgsequence/original/080.webp',
  '/imgsequence/original/081.webp',
  '/imgsequence/original/082.webp',
  '/imgsequence/original/083.webp',
  '/imgsequence/original/084.webp',
  '/imgsequence/original/085.webp',
  '/imgsequence/original/086.webp',
  '/imgsequence/original/087.webp',
  '/imgsequence/original/088.webp',
  '/imgsequence/original/089.webp',
  '/imgsequence/original/090.webp',
  '/imgsequence/original/091.webp',
  '/imgsequence/original/092.webp',
  '/imgsequence/original/093.webp',
  '/imgsequence/original/094.webp',
  '/imgsequence/original/095.webp',
  '/imgsequence/original/096.webp',
  '/imgsequence/original/097.webp',
  '/imgsequence/original/098.webp',
  '/imgsequence/original/099.webp',
  '/imgsequence/original/100.webp',
  '/imgsequence/original/101.webp',
  '/imgsequence/original/102.webp',
  '/imgsequence/original/103.webp',
  '/imgsequence/original/104.webp',
  '/imgsequence/original/105.webp',
  '/imgsequence/original/106.webp',
  '/imgsequence/original/107.webp',
  '/imgsequence/original/108.webp',
  '/imgsequence/original/109.webp',
  ]
  
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

  // const imageLinks = [ 
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
  //   '/imgsequence/IMGtest.jpg',
    
  //   '/imgsequence/Updated/0001 (1).webp',
  //   '/imgsequence/Updated/0002 (1).webp',
  //   '/imgsequence/Updated/0003 (1).webp',
  //   '/imgsequence/Updated/0004 (1).webp',
  //   '/imgsequence/Updated/0005 (1).webp',
  //   '/imgsequence/Updated/0006 (1).webp',
  //   '/imgsequence/Updated/0007 (1).webp',
  //   '/imgsequence/Updated/0008 (1).webp',
  //   '/imgsequence/Updated/0009 (1).webp',
  //   '/imgsequence/Updated/0010 (1).webp',
  //   '/imgsequence/Updated/0011 (1).webp',
  //   '/imgsequence/Updated/0012 (1).webp',
  //   '/imgsequence/Updated/0013 (1).webp',
  //   '/imgsequence/Updated/0014 (1).webp',
  //   '/imgsequence/Updated/0015 (1).webp',
  //   '/imgsequence/Updated/0016 (1).webp',
  //   '/imgsequence/Updated/0017 (1).webp',
  //   '/imgsequence/Updated/0018 (1).webp',
  //   '/imgsequence/Updated/0019 (1).webp',
  //   '/imgsequence/Updated/0020 (1).webp',
  //   '/imgsequence/Updated/0021 (1).webp',
  //   '/imgsequence/Updated/0022 (1).webp',
  //   '/imgsequence/Updated/0023 (1).webp',
  //   '/imgsequence/Updated/0024 (1).webp',
  //   '/imgsequence/Updated/0025 (1).webp',
  //   '/imgsequence/Updated/0026 (1).webp',
  //   '/imgsequence/Updated/0027 (1).webp',
  //   '/imgsequence/Updated/0028 (1).webp',
  //   '/imgsequence/Updated/0029 (1).webp',
  //   '/imgsequence/Updated/0030 (1).webp',
  //   '/imgsequence/Updated/0031 (1).webp',
  //   '/imgsequence/Updated/0032 (1).webp',
  //   '/imgsequence/Updated/0033 (1).webp',
  //   '/imgsequence/Updated/0034 (1).webp',
  //   '/imgsequence/Updated/0035 (1).webp',
  //   '/imgsequence/Updated/0036 (1).webp',
  //   '/imgsequence/Updated/0037 (1).webp',
  //   '/imgsequence/Updated/0038 (1).webp',
  //   '/imgsequence/Updated/0039 (1).webp',
  //   '/imgsequence/Updated/0040 (1).webp',
  //   '/imgsequence/Updated/0041 (1).webp',
  //   '/imgsequence/Updated/0042 (1).webp',
  //   '/imgsequence/Updated/0043 (1).webp',
  //   '/imgsequence/Updated/0044 (1).webp',
  //   '/imgsequence/Updated/0045 (1).webp',
  //   '/imgsequence/Updated/0046 (1).webp',
  //   '/imgsequence/Updated/0047 (1).webp',
  //   '/imgsequence/Updated/0048 (1).webp',
  //   '/imgsequence/Updated/0049 (1).webp',
  //   '/imgsequence/Updated/0050 (1).webp',
  //   '/imgsequence/Updated/0051 (1).webp',
  //   '/imgsequence/Updated/0052 (1).webp',
  //   '/imgsequence/Updated/0053 (1).webp',
  //   '/imgsequence/Updated/0054 (1).webp',
  //   '/imgsequence/Updated/0055 (1).webp',
  //   '/imgsequence/Updated/0056 (1).webp',
  //   '/imgsequence/Updated/0057 (1).webp',
  //   '/imgsequence/Updated/0058 (1).webp',
  //   '/imgsequence/Updated/0059 (1).webp',
  //   '/imgsequence/Updated/0060 (1).webp',
  //   '/imgsequence/Updated/0061 (1).webp', 
  //   '/imgsequence/Updated/0062 (1).webp',
  //   '/imgsequence/Updated/0063 (1).webp',
  //   '/imgsequence/Updated/0064 (1).webp',
  //   '/imgsequence/Updated/0065 (1).webp',
  //   '/imgsequence/Updated/0066 (1).webp',
  //   '/imgsequence/Updated/0067 (1).webp',
  //   '/imgsequence/Updated/0068 (1).webp',
  //   '/imgsequence/Updated/0069 (1).webp',
  //   '/imgsequence/Updated/0070 (1).webp',
  //   '/imgsequence/Updated/0071 (1).webp',
  //   '/imgsequence/Updated/0072 (1).webp',
  //   '/imgsequence/Updated/0073 (1).webp',
  //   '/imgsequence/Updated/0074 (1).webp',
  //   '/imgsequence/Updated/0075 (1).webp',
  //   '/imgsequence/Updated/0076 (1).webp',
  //   '/imgsequence/Updated/0077 (1).webp',
  //   '/imgsequence/Updated/0078 (1).webp',
  //   '/imgsequence/Updated/0079 (1).webp',
  //   '/imgsequence/Updated/0080 (1).webp',
  //   '/imgsequence/Updated/0081 (1).webp',
  //   '/imgsequence/Updated/0082 (1).webp',
  //   '/imgsequence/Updated/0083 (1).webp',
  //   '/imgsequence/Updated/0084 (1).webp',
  //   '/imgsequence/Updated/0085 (1).webp',
  //   '/imgsequence/Updated/0086 (1).webp',
  //   '/imgsequence/Updated/0087 (1).webp',
  //   '/imgsequence/Updated/0088 (1).webp',
  //   '/imgsequence/Updated/0089 (1).webp',
  //   '/imgsequence/Updated/0090 (1).webp',
  //   '/imgsequence/Updated/0091 (1).webp',
  //   '/imgsequence/Updated/0092 (1).webp',
  //   '/imgsequence/Updated/0093 (1).webp',
  //   '/imgsequence/Updated/0094 (1).webp',
  //   '/imgsequence/Updated/0095 (1).webp',
  //   '/imgsequence/Updated/0096 (1).webp',
  //   '/imgsequence/Updated/0097 (1).webp',
  //   '/imgsequence/Updated/0098 (1).webp',
  //   '/imgsequence/Updated/0099 (1).webp',
  //   '/imgsequence/Updated/0100 (1).webp',
  // ]


export default function BandicootImageSequence(){
  return(
    <>
    <div style={{background:'#EEEEEA'}}>
    <ImagePlay frameCount={100} travelPixel={3000} imageLinks={imageLinks} />
    </div>
    </>
  )
}