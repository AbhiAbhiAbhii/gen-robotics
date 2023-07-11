import { PrismicRichText } from "@prismicio/react";
import PositionCTA from "../../components/PositionCTAComponent";

/**
 * @typedef {import("@prismicio/client").Content.CareerHeroSlice} CareerHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerHeroSlice>} CareerHeroProps
 * @param {CareerHeroProps}
 */
export default function CareerHero({slice}) {



  return(
    <section className="carrHero"> 
      <div className="carrHero_Title">
        <h1>
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="carr_CTA_Container">
        <PositionCTA 
          classNameA="career_CTA_A" 
          classNameB="career_CTA_B"  
          classNameC="career_CTA_C"
          bg="#FFFF" />
      </div>
    </section>
  )
}
