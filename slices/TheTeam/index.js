/* eslint-disable @next/next/no-img-element */
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.TheTeamSlice} TheTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TheTeamSlice>} TheTeamProps
 * @param {TheTeamProps}
 */
export default function TheTeam({slice}){

  let dummyData = [
    {
      src:'/dummyA.jpg',
      fullName: 'Neo',
      position: 'CEO, Genrobotics'
    },
    {
      src:'/dummyA.jpg',
      fullName: 'Mr.Anderson',
      position: 'CEO, Genrobotics'
    },
    {
      src:'/dummyA.jpg',
      fullName: 'Morpheus',
      position: 'CEO, Genrobotics'
    },
    {
      src:'/dummyA.jpg',
      fullName: 'Morpheus',
      position: 'CEO, Genrobotics'
    },
  ]

  let EyebrowTitle = <PrismicRichText field={slice.primary.title} />
  let EyebrowSubTitle = <PrismicRichText field={slice.primary.subtitle} />

  return(
    <>
    <section className="Team">
      <div className="Team_Container">
        <div className="Team_Eyebrow">
          <div className="Team_Eyebrow_Title">
            <p>
              { EyebrowTitle }
            </p>
          </div>
          <div className="Team_Eyebrow_Subtitle">
              <p>
                { EyebrowSubTitle }
              </p>
          </div>
        </div>
        <div className="Team_ShowcaseContainer">
          <div className="Team_Showcase">
            {
              dummyData.map((data, i) => {
                return(
                  <div className="Team_Showcase_Item" key={i}>
                    <div className="Team_Showcase_Img">
                      <img src={data.src} alt="img"/>
                    </div>
                    <div className="Team_Showcase_Fullname">
                      <p>
                        {data.fullName}
                      </p>
                    </div>
                    <div className="Team_Showcase_Position">
                      <p>
                        {data.position}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
