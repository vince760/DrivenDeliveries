import React from 'react'
import BlackSquare from './BlackSquare'
import WhiteSquare from './WhiteSquare'

const Even=(props)=>{
    const evenRows = () => {
        const squares = []
        for (let i = 0; i < 8; i++) {
            
            if (i % 2) {
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><WhiteSquare key={i} row={props.row}  /></div>)

            }
            else {
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><BlackSquare key={i} row={props.row} /></div>)
            }


        }

        return squares
    }
    return(
        evenRows()
    )
}

export default Even