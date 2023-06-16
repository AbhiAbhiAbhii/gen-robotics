

export default function BulletComponent({BulletText, bullets, DataArray}){

    let Data = DataArray;
    
    return(
        <>
        <div className="bullet_Container">
            <div className="bullet_MainText">
                <p>
                    {BulletText}
                </p>
            </div>
            <div className="bullet_Point_Container">
                <ul>
                    {Data.map((data,i) => {
                        return(
                            <li key={i}>
                                <p>
                                    {data.bullet}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}