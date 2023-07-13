

export default function ProductOverviewEB({ ovEbDescA, overviewEyebrow, colorText, A, B }) {

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
                       { A } <br/>{ B }<br/> <span className="mustard-dark">{ colorText }</span>
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