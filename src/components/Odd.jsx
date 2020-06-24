import React from 'react'
import BlackSquare from './BlackSquare'
import WhiteSquare from './WhiteSquare'

const Odd=(props)=>{
    const oddRows = () => {
        const squares = []
        for (let i = 0; i < 8; i++) {
            
            if (i % 2) {
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><BlackSquare row={props.row} /></div>)


            }
            else {
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><WhiteSquare row={props.row}/></div>)
            }


        }

        return squares
    }
    return(
        oddRows()
    )
}

export default Odd