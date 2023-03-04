import React from 'react'
import '../sass/Buttons.scss'
function Buttons({icon, click}) {
    return (
    <div className='btn__box'>
        <button 
            className='btn'
            onClick={ click }
        >
        {icon}    
        </button>
        <div className="btn__shadow"></div>
    </div>
    )
}

export { Buttons }