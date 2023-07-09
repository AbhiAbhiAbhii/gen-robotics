

export default function ProductOverviewEB({ ovEbDescA, overviewEyebrow, colorText }) {

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