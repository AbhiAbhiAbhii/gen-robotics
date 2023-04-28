import { useEffect } from 'react'
import Header from '../components/Header/header'
import '../styles/globals.css'
import '../styles/Landing/showCase.css'
import Lenis from '@studio-freight/lenis'


export default function App({ Component, pageProps }) {

  let lenis;

  useEffect(()=>{

    if (typeof window !== "undefined") {

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: true,
        touchMultiplier: 2,
        infinite: false,
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

  }, [])

  return(
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}
