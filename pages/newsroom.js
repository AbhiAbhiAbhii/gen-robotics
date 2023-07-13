import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import InnovateV2 from '../components/InnovateV2'
import Innovate from '../components/AboutSlices/innovate'


export default function NewsRoom({page}){

    return(
        <>
        <Header />
        <div className='news_Wrapper'>
        <SliceZone slices={page.data.slices}  components={components} />
        <Innovate context={page.type} />
        </div>
        <Footer />
        </>
    )
}

export async function getStaticProps({previewData}){
    const client = createClient({previewData})
    const page = await client.getSingle('news_room_page')
    return{
        props:{
            page
        }
    }
}