import { PrismicRichText } from "@prismicio/react"
import ApplyPositionCTA from "../../components/ApplyPositionCTA"

/**
 * @typedef {import("@prismicio/client").Content.CareerChildHeroSlice} CareerChildHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerChildHeroSlice>} CareerChildHeroProps
 * @param {CareerChildHeroProps}
 */
export default function CareerChildHero({slice}){


  let Tags = [ 
    {
      tag: <PrismicRichText field={slice.primary.position_type_tag} />
    },
    {
      tag: <PrismicRichText field={slice.primary.position_tag} />
    }
  ]

  return(
    <>
    <section className="carrChildHero">
      <div className="carrChildHero_Container">
        <div className="carrChildHero_Text_Container">
          <div className="carrChildHero_Title_Container">
            <div className="carrChildHero_Tag_Container">
              {
                Tags.map((data, i) => {
                  return(
                    <div key={i} className="carrChildHero_Tag">
                      <p>
                        {
                          data.tag
                        }
                      </p>
                      <div 
                        style={{display: i == 1 ? 'none':''}} 
                        className="carrChildHero_Tag_Dot" />
                    </div>
                  )
                })
              }
            </div>
            <div className="carrChildHero_Title">
              <h1>
                <PrismicRichText field={slice.primary.position_title} />
              </h1>
            </div>
          </div>
          <div className="carrChildHero_CTA">  
            <ApplyPositionCTA width="18em" margin="0 2em 0 0" widthB="6em" bg="#FFF" height="4.6em"/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
