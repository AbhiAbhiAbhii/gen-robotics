import { useEffect } from "react"

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
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg` 
  )


  // create variable for the number of frames/image
  const frameCount = 147; // 147 frames/still images

  // canvas setup 
  // height and width of the image
  canvas.height = 770;
  canvas.width = 1158;

  // generate an image
  const img = new Image(); 
  // dynamically calling the img source from the currentFrame function
  img.src = currentFrame(1); 

  // loading the image onto the canvas
  img.onload = function() {
  context.drawImage(img, 0, 0)  // 0, 0 = x & y values
  }

  // create a function to update the img on scroll
  const updateImage = (index) => {
    img.src = currentFrame(index); // source of the img is the currentFrame index which will be updated

    context.drawImage(img, 0, 0); // every time the img is updated it is being rendered again in the canvas
  }

  // update with scroll
  window.addEventListener('scroll', () => {

    // getting the scrollTop value
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window/innerHeight;

  })


  }, [])

  


  return(
    <>
      {/* <section className='bandicootImageSequence' style={{background:'#0E0E0E', display:'none'}}>
        <div className='bandicootImageSequence_Container'>

          <canvas className="bandicoot-scrolling"></canvas>

        </div>
      </section> */}
    </>
  )
}
