/* eslint-disable @next/next/no-img-element */
import { PrismicLink, PrismicRichText } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.CareerOpenPositionSlice} CareerOpenPositionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerOpenPositionSlice>} CareerOpenPositionProps
 * @param {CareerOpenPositionProps}
 */
export default function CareerOpenPosition({slice}){
  return(
    <>
    <section className="carrOP" id="carr_OP">
      <div className="carrOP_Container">
        <div className="carrOP_Title">
          <h2>
            Our Open Position
          </h2>
        </div>
        {/* Positions */}
        <div className="carrOP_Items_Container">
          {
            slice.items.map((data, i) => {
              return(
                <div className="carrOP_Item" key={i}>
                  <div className="carrOP_Item_Position">
                    <p>
                      <PrismicRichText field={data.position_title} />
                    </p>
                  </div>
                  <div className="carrOP_Item_Position_Type">
                    <p>
                      <PrismicRichText field={data.position_type} />
                    </p>
                  </div>
                  <PrismicLink className="carrOP_Item_Link" field={data.cta_link}>
                    <div className="carrOP_Item_CTA">
                      <div className="carrOP_Item_InnerCTA_WRAP">
                        <button
                        style={{background:'none', outline:'none', border:'none', cursor:'pointer'}}
                        >Apply Now</button><span style={{position:'relative', transform:'translate(5%, 6%)'}}><img src="/OpenPosition/OP_Arrow.svg" alt="arrow" /></span>
                      </div>
                    </div>
                  </PrismicLink>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}
