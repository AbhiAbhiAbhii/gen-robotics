import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import AboutHero from '../components/AboutSlices/aboutHero'
import Innovate from '../components/AboutSlices/innovate'

 
const Home = ({ page, navigation, settings }) => {

  return(
    <>
    <div>
        <AboutHero />
        <SliceZone  slices={page.data.slices} components={components} />
        <Innovate />
    </div>
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