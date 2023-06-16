import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Innovate from "../../components/AboutSlices/innovate";

export default function Career({page}) {
    return(
        <>
        <Header />
        <SliceZone slices={ page.data.slices } components={ components }  />
        <Innovate />
        <Footer />
        </>
    )
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const page = await client.getSingle('career_page');

    return {
        props: {
            page
        }
    }
}