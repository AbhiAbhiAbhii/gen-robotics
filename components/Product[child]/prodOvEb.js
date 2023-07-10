

export default function ProductOverviewEB({ ovEbDescA, overviewEyebrow, colorText }) {

    return(
        <>
        <section className="product_Overview_Eyebrow">
            <div className="product_Overview_Eyebrow_Container">
                <div className="product_Overview_Eyebrow_Left">
                    <p>
                        { overviewEyebrow } <span className="mustard-dark">{ colorText }</span>
                    </p>
                </div>
                <div className="product_Overview_Eyebrow_Left product_Overview_Eyebrow_Left_Mob">
                    <p>
                       When <br/>Engineering meets<br/> <span className="mustard-dark">{ colorText }</span>
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