import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CareerMissionSlice} CareerMissionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerMissionSlice>} CareerMissionProps
 * @param {CareerMissionProps}
 */
export default function CareerMission({slice}){


  return(
    <>
    <section className="carrMission">
      <div className="carrMission_Container">
        {/* Gold Div */}
        <div className="carrMission_Content_Container">
          <div className="carrMission_Content_Inner_Container">
              {/* Text Container */}
            <div className="carrMission_Text_Container">
              <div className="carrMission_Title">
                <p>
                  <PrismicRichText field={slice.primary.title} />
                </p>
              </div>
              <div className="carrMission_Description">
                <p>
                  <PrismicRichText field={slice.primary.description} />
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="carrMission_Img_Container">
              <PrismicNextImage 
                style={{height:'100%', width:'100%', objectFit:'contain'}} 
                field={slice.primary.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
