import React from 'react'
import '../sass/Card.scss'

function Card({name,image}) {
    return (
        <div className="card">
            <p className="card__name">{name}</p>
            <div className="card__circle">
                <img src={image} alt="rnm_img" className='card__img' />
            </div>
        </div>
    )
}

export { Card }