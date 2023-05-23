

export default function ProductOverviewEB() {

      // Second section
      let overviewEyebrow = "When Engineering Meets"
      let colorText = "Compassion!"
  
      let ovEbDescA = "Bandicoot is an advanced robotic machine engineered for efficient cleaning of sewer manholes. Its customizable diving drone, nano coating, and flexible arm enable effective"
      let ovEbDescB = "operation in hazardous environments. It surpasses human capabilities in time and efficiency, while sensor-based feedback ensures precise cleaning."

    return(
        <>
        <section className="product_Overview_Eyebrow" style={{margin:'10em 0'}}>
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