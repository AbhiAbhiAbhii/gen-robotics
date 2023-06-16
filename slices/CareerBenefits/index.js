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
        <div className="carrBenefit_IconContainer">
            {
              TempData.map((data, i) => {
                return(
                  <div className="carrBenefit_Icon_Main_Wrap" key={i}>
                    <div className="carrBenefit_Icon_Item">
                      <div className="" style={{height:'9em', width:'9em', borderRadius:'50%', background:'#D9D9D9'}} >
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
