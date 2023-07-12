import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import { useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import Head from 'next/head'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'


 
const Home = ({ page, navigation, settings }) => {

  let context = page.type;


  const loaderLeftRef = useRef();
  const loaderRightRef = useRef();
  const loaderCurtainRef = useRef();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      
      setTimeout(() => {
          setLoading(false)
        }, 6200)

        setTimeout(() => {
          loaderCurtainRef.current.style.opacity = "0";
        }, 6600)
        setTimeout(() => {
          loaderCurtainRef.current.style.display = "none";
        }, 7100)
         setTimeout(() => {
           loaderLeftRef.current.style.width = "0";
           loaderRightRef.current.style.width = "0";
         }, 7000)
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
      
        <>
        <Header />
        <div style={{position:'relative'}}>
          {/* LOADER REVEAL OVERLAY */}
          <div ref={loaderLeftRef} className='loaderLeft_Reveal' style={{transition:`all 1s ${quart}`}} />
          <div ref={loaderRightRef} className='loaderRight_Reveal' style={{transition:`all 1s ${quart}`}} />
          <div ref={loaderCurtainRef} style={{height:'100vh', width:'100vw', background:'#FFF', zIndex:'250', position:'absolute', top:'0', left:'0'}} />
          {/*  */}
          <SliceZone quint={quint} quart={quart}  slices={page.data.slices} components={components} />
        </div>
        <Footer context={ context }  />
    {/* <ImagePlay frameCount={100} travelPixel={3000} imageLinks={imageLinks} texts={texts} /> */}
    </>
      
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