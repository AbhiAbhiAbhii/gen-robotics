import { PrismicRichText } from "@prismicio/react";
import ChildInfoComponent from "../../components/CarrChildInfoComponent";

/**
 * @typedef {import("@prismicio/client").Content.CareerChildInformationSlice} CareerChildInformationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerChildInformationSlice>} CareerChildInformationProps
 * @param {CareerChildInformationProps}
 */
export default function CareerChildInformation({slice}){
  return(
    <>
    <section className="carrChildInfo">
      <div className="carrChildInfo_Container">  
        <div className="carrChildInfo_Para">
          <h1>
            <PrismicRichText field={slice.primary.title} /> 
          </h1>
          <p>
            <PrismicRichText field={slice.primary.description} />
          </p>
        </div>
        {
          slice.items.map((data, i) => {
            return(
              <ChildInfoComponent key={i} 
                Points={<PrismicRichText field={data.bullet_points}/>} 
                Title={<PrismicRichText field={data.title} />}  
              />
            )
          })
        }
      </div>
    </section>
    </>
  )
}
