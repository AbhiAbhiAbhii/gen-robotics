import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import AboutHero from '../components/AboutSlices/aboutHero'
import Innovate from '../components/AboutSlices/innovate'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'

 
const Home = ({ page, navigation, settings }) => {

  return(
    <>
    <Header />
      <div>
          <AboutHero />
          <SliceZone  slices={page.data.slices} components={components} />
          <Innovate />
      </div>
    <Footer />
    </>
  )
}
 
export default Home
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('about_page')
  return {
    props: {
      page
    }
  }
}