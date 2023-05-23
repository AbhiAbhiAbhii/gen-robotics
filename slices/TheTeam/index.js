/* eslint-disable @next/next/no-img-element */
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import { useEffect, useRef } from "react"

/**
 * @typedef {import("@prismicio/client").Content.TheTeamSlice} TheTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TheTeamSlice>} TheTeamProps
 * @param {TheTeamProps}
 */
export default function TheTeam({slice}){

  // data

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

  // Animation

  // Transition
  let quint = 'cubic-bezier(0.85, 0, 0.15, 1)';
  let quart = 'cubic-bezier(0.76, 0.00, 0.24, 1.00)';

  let hide = 'translateY(100%)';
  let reveal = 'translateY(0%)';

  const ebTitleRef = useRef();
  const ebSubTitleRef = useRef();

//   useEffect(() => {

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if(entry.isIntersecting) {
//           ebTitleRef.current.style.transform =  reveal; 
//           setTimeout(() => {
//             ebSubTitleRef.current.style.transform = reveal; 
//           },500)
//         }
//       })
//     })
//   observer.observe(document.querySelector('.Team'));

//  anim paused, building contact page
//   }, [])


  return(
    <>
    {/* <section className="Team">
      <div className="Team_Container">
        <div className="Team_Eyebrow">
          <div className="Team_Eyebrow_Title ofh">
            <p ref={ebTitleRef} style={{transform: hide, transition: `all 1s ${quint}`}}>
              { EyebrowTitle }
            </p>
          </div>
          <div className="Team_Eyebrow_Subtitle ofh">
              <p ref={ebSubTitleRef} style={{transform: hide, transition: `all 1s ${quint}`}}>
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
    </section> */}
    </>
  )
}
