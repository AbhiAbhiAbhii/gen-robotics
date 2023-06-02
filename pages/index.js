import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import { useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
// import ImagePlay from '../components/ImgPlay/imgPlay'

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
  
//   const texts = [
//     {
//       id: "one",
//       text: "One",
//       startFrame: 20,
//       endFrame: 40
//     },
//     {
//       id: "two",
//       text: "Two",
//       startFrame: 50,
//       endFrame: 70
//     },
//     {
//       id: "three",
//       text: "Three",
//       startFrame: 80,
//       endFrame: 99
//     }
//   ]

 
const Home = ({ page, navigation, settings }) => {


  const loaderLeftRef = useRef();
  const loaderRightRef = useRef();
  const loaderCurtainRef = useRef();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      
      setTimeout(() => {
          setLoading(false)
        }, 6500)

        setTimeout(() => {
          loaderCurtainRef.current.style.opacity = "0";
        }, 6600)
        setTimeout(() => {
          loaderCurtainRef.current.style.display = "none";
        }, 7100)
         setTimeout(() => {
           loaderLeftRef.current.style.width = "0";
           loaderRightRef.current.style.width = "0";
         }, 6700)
         setTimeout(() => {
            loaderLeftRef.current.style.display = "none";
            loaderRightRef.current.style.display = "none";
         }, 8000)

  }, [])

  // Transition
  let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
  let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';


  return(
    <>
    <Head />
    {
      loading ? (<Loader /> ):
      (
        <>
       
        <Header />
        <div style={{position:'relative'}}>
          {/* LOADER REVEAL OVERLAY */}
          <div ref={loaderLeftRef} className='loaderLeft_Reveal' style={{transition:`all 1s ${quart}`}}></div>
          <div ref={loaderRightRef} className='loaderRight_Reveal' style={{transition:`all 1s ${quart}`}}></div>
          <div ref={loaderCurtainRef} style={{height:'100vh', width:'100vw', background:'#FFF', zIndex:'250', position:'absolute', top:'0', left:'0'}} />
          {/*  */}
          <SliceZone  slices={page.data.slices} components={components} />
        </div>
        <Footer />
    {/* <ImagePlay frameCount={100} travelPixel={3000} imageLinks={imageLinks} texts={texts} /> */}
    </>
      )
    }
        
    </>
  )
}
 
export default Home
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('home_page')
  return {
    props: {
      page
    }
  }
}