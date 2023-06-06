/* eslint-disable @next/next/no-img-element */


export default function Drag({className}) {
    return(
        <div className="DragContainer">
            <div className='DragArrow'> 
                <img src='/DragArrow.svg' alt='arrow' />
            </div>
            <div className='DragText'>
                <p>DRAG</p>
            </div>
            <div className='DragArrow'> 
                <img src='/DragArrowReverse.svg' alt='arrow' />
            </div>
        </div>
    )
}