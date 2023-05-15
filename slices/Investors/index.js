/* eslint-disable @next/next/no-img-element */
import { PrismicRichText } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.InvestorsSlice} InvestorsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InvestorsSlice>} InvestorsProps
 * @param {InvestorsProps}
 */
export default function Investors({slice}){

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
    <section className="Investors">
      <div className="Investors_Container">
        <div className="Investors_Eyebrow">
          <div className="Investors_Eyebrow_Title">
            <p>
              { EyebrowTitle }
            </p>
          </div>
          <div className="Investors_Eyebrow_Subtitle">
            <p>
              { EyebrowSubTitle }
            </p>
          </div>
        </div>
        <div className="Investors_Showcase_Container">
          <div className="Investors_Showcase"> 
            {
              dummyData.map((data, i) => {
                return(
                  <div className="Investors_Showcase_Item" key={i}>
                    <div className="Investors_Showcase_Img">
                      <img src={data.src} alt="img" />
                    </div>
                    <div className="Investors_Showcase_TextContainer">
                      <div className="Investors_Showcase_Fullname">
                        <p>
                          {data.fullName}
                        </p>
                      </div>
                      <div className="Investors_Showcase_Position">
                        <p>
                          {data.position}
                        </p>
                      </div>
                      <div className="Investors_Showcase_CompanyName">
                        <p>
                          Genrobotics
                        </p>
                      </div>
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
