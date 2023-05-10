import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Menu from '../components/Menu/menu'

 
const Home = ({ page, navigation, settings }) => {

  return(
    <>
    <SliceZone  slices={page.data.slices} components={components} />
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