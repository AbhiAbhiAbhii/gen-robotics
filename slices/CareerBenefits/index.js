import { PrismicRichText } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.CareerBenefitsSlice} CareerBenefitsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerBenefitsSlice>} CareerBenefitsProps
 * @param {CareerBenefitsProps}
 */
export default function CareerBenefits({slice}){


  let TempData = [
    {
      description:"Undefined"
    },
    {
      description:"Undefined"
    },
    {
      description:"Undefined"
    },
    {
      description:"Undefined"
    },
  ]

  return(
    <>
    <section className="carrBenefit">
      <div className="carrBenefit_Container">
        <div className="carrBenefit_Text_Container">
          <div className="carrBenefit_Title"> 
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="carrBenefit_Description">
            <p>
              <PrismicRichText field={slice.primary.description} />
            </p>
          </div>
        </div>
        <div className="carrBenefit_IconContainer" style={{}}>
            {
              TempData.map((data, i) => {
                return(
                  <div className="carrBenefit_Icon_Main_Wrap" key={i}>
                    <div className="carrBenefit_Icon_Item">
                      <div className="carrBenefit_Temp_Icon">
                      </div>
                      <div className="carrBenefit_Icon_Description">
                        <p>
                          {data.description}
                        </p>
                      </div>
                    </div>
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
