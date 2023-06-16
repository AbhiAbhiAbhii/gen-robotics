

export default function ComponentA({SubTitle, DescriptionA, DescriptionB}) {
    return(
        <div className="TC_Component_Container">
            <div className="TC_Component_Title">
                <h3>
                    {SubTitle}
                </h3>
            </div>
            <div className="TC_Component_Description">
                <p>
                    {DescriptionA}<br /><br/>{DescriptionB}
                </p>
            </div>
        </div>
    )
}