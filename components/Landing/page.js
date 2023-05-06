import BandicootShowcase from "../Slices/LandingPage/BandicootShowcase/bandicootShowcase";
import BluePrint from "../Slices/LandingPage/BluePrint/blueprint";
import Hero from "../Slices/LandingPage/Hero/Hero";
import Launch from "../Slices/LandingPage/Launch/launch";
import ProductOverview from "../Slices/LandingPage/ProductBriefOverview/productOverview";
import ProductShowcase from "../Slices/LandingPage/ProductShowcaseSlider/productShowcase";


export default function Page() {
    return(
        <>
        <Hero />
        <ProductOverview />
        <BandicootShowcase />
        <BluePrint />
        <ProductShowcase />
        <Launch />
        </>
    )
}