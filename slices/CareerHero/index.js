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
      <PositionCTA margin="4em 0 0 0" width="18em" widthB="6em" bg="#FFFF"  height="5em" />
    </section>
  )
}
