import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import FeaturesScale from "../../components/Product[child]/featScale";
import ProductImgSequence from "../../components/Product[child]/imgSeq";
import ProductBottomShowcase from "../../components/Product[child]/prodBotmShowcase";
import ProductHero from "../../components/Product[child]/prodHero";
import ProductOverviewEB from "../../components/Product[child]/prodOvEb";


export default function Willboar() {
    return(
        <>
        <Header />
        <ProductHero img="/Products/bCoot_Hero.png" />
        <ProductOverviewEB />
        <ProductImgSequence />
        <FeaturesScale />
        <ProductBottomShowcase />
        <Footer />
        </>
    )
}