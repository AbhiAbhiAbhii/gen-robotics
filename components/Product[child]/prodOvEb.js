

export default function ProductOverviewEB() {

      // Second section
      let overviewEyebrow = "When engineering meets"
      let colorText = "Compassion!"
  
    //   let ovEbDescA = "Bandicoot is an advanced robotic machine engineered for efficient cleaning of sewer manholes. Its customizable diving drone, nano coating, and flexible arm enable effective"
    //   let ovEbDescB = "operation in hazardous environments. It surpasses human capabilities in time and efficiency, while sensor-based feedback ensures precise cleaning."

      let ovEbDescA = "We understand the challenges faced by sanitation workers, who often endure hazardous conditions while maintaining essential Services. Bandicoot - a cutting-edge solution that combines advanced engineering technology with compassion for these brave individuals. By leveraging robotics and artificial intelligence, the Bandicoot Robot enters and cleans manholes, eliminating the need for sanitation workers to expose themselves to dangerous environments."
      let ovEbDescB = "Our innovation is not just a remarkable feat of engineering; it represents a paradigm shift in the way we approach sanitation. With the Bandicoot Robot, we ensure that sanitation workers can carry out their duties with enhanced safety, dignity, and respect. "
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
                        { ovEbDescA }
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}