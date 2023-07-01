import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import FeaturesScale from "../../components/Product[child]/featScale"
import ProductImgSequence from "../../components/Product[child]/imgSeq"
import ProductBottomShowcase from "../../components/Product[child]/prodBotmShowcase"
import ProductHero from "../../components/Product[child]/prodHero"
import ProductOverviewEB from "../../components/Product[child]/prodOvEb"


export default function BandicootII(){

    return(
        <>
        <Header />
        <ProductHero video="/Products/BandicootRevealHeroVid.mp4" />
        <ProductOverviewEB />
        {/* image-sequence */}
        <ProductImgSequence />
        {/* ------------------- */}
        <FeaturesScale />
        <ProductBottomShowcase />
        <Footer />
        </>
    )
}