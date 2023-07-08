import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AboutVisionMissionSlice} AboutVisionMissionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutVisionMissionSlice>} AboutVisionMissionProps
 * @param {AboutVisionMissionProps}
 */
export default function AboutVisionMission({slice}){

  let PrismicData = [
    {
      text:'Vision',
      description: <PrismicRichText field={slice.primary.vision_description} />,
      img: <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover'}} field={slice.primary.vision_image} alt={slice.primary.vision_image.alt} />
    },
    {
      text:'Mission',
      description: <PrismicRichText field={slice.primary.mission_description} />,
      img: <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover'}} field={slice.primary.mission_image} alt={slice.primary.mission_image.alt} />
    }
  ]

  return(
    <section className="aboutVM">
      <div className="aboutVM_Container">
        <div className="aboutVM_Text_Container">
          <div className="aboutVM_Title">
            <p>
              <PrismicRichText field={slice.primary.title} />
            </p>
          </div>
          <div className="aboutVM_Description">
            <p>
              <PrismicRichText field={slice.primary.description} />
            </p>
          </div>
        </div>
        <div className="aboutVM_Bottom_Container">
          {
            PrismicData.map((data, i) => {
              return(
                <div className="aboutVM_Item_Container" key={i}>
                  <div className="aboutVM_Item_Left">
                    <div className="aboutVM_Item_Title">
                      <p>{ data.text }</p>
                    </div>
                    <div className="aboutVM_Item_Description">
                      <p>{ data.description }</p>
                    </div>
                  </div>
                  <div className="aboutVM_Item_Right">
                    <div className="aboutVM_Item_Right_Img_Container">
                      { data.img }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
