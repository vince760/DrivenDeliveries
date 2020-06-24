import React from 'react'
import Square from './Square'

const RenderSquare=(i)=>{
    const x = i % 8
    const y = Math.floor(i /8)
    const black = (x + y) % 2 === 1


    return(
        <div key={i} style={{width: '12.5%', height: '12.5%'}}>
            <Square black={black}/>
        </div>

    )
}

export default RenderSquare