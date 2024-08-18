import { useState } from 'react';

export default function Card({image, cardClick}) {
    
    return(
        
        <button 
            onClick={cardClick} 
            className='basis-1/6 m-1'
        >
            <img src={image}/>
        </button>
        )
}