export default function ChildInfoComponent({Title, Points}){
    return(
        <>
        <div className="carrChildInfo_Component">
            <div className="carrChildInfo_Component_Title">
                <h2>
                    { Title }
                </h2>
            </div>
            <div className="carrChildInfo_Component_Points">
                <p>
                    { Points }
                </p>
            </div>
        </div>
        </>
    )
}