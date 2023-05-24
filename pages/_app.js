import { useEffect } from 'react'
import Head from 'next/head'

import '../styles/globals.css'
import '../styles/Landing/hero.css'
import '../styles/Landing/heroAbout.css'
import '../styles/Landing/bluePrint.css'
import '../styles/Landing/productShowcase.css'
import '../styles/Landing/ourSupport.css'
import '../styles/Landing/imgSequence.css'

//nav css
import '../styles/Header/header.css'
import '../styles/Header/menu.css'

// footer css
import '../styles/footer.css'

// About css
import '../styles/About/aboutHero.css'
import '../styles/About/innovation.css'
import '../styles/About/team.css'
import '../styles/About/investors.css'
import '../styles/About/innovate.css'

// Contact css
import '../styles/contact.css'

//Product Child css
import '../styles/Products/prodHero.css'
import '../styles/Products/prodOvEb.css'
import '../styles/Products/featScale.css'
import '../styles/Products/prodBtm.css'

import Lenis from '@studio-freight/lenis'
import Layout from '../components/Layout/layout'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

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

    // console.log("lenis", lenis.virtualScroll)
    // 


  }, [])

  return (
    <PrismicProvider linkResolver={linkResolver} internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
      </PrismicPreview>
    </PrismicProvider>
  )
}
