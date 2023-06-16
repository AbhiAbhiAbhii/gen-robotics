

export default function ComponentC({SubTitle, DescriptionA, DescriptionB, DescriptionC}) {
    return(
        <div className="TC_Component_Container">
            <div className="TC_Component_Title">
                <h3>
                    {SubTitle}
                </h3>
            </div>
            <div className="TC_Component_Description">
                <p>
                    {DescriptionA}<br /><br/>{DescriptionB}<br />{DescriptionC}
                </p>
            </div>
        </div>
    )
}