

export default function ProductOverviewEB() {

      // Second section
      let overviewEyebrow = "Mobility designed around"
      let colorText = "you"
  
      let ovEbDescA = "We’re reinventing personal transportation—making the future safer, cleaner, and more enjoyable for everyone. It's on-demand autonomous ride-hailing."
      let ovEbDescB = "Let Bandicoot handle the traffic, while you enjoy a smooth, relaxing ride in a spacious cabin designed around you."

    return(
        <>
        <section className="product_Overview_Eyebrow">
            <div className="product_Overview_Eyebrow_Container">
                <div className="product_Overview_Eyebrow_Left">
                    <p>
                        { overviewEyebrow } <span className="mustard-dark">{ colorText }</span>
                    </p>
                </div>
                <div className="product_Overview_Eyebrow_Right">
                    <p>
                        { ovEbDescA } <br /><br /> { ovEbDescB }
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}