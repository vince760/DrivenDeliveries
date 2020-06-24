import React from 'react'

const WhiteSquare = ({ black, children }) => {
    const fill = black ? 'grey' : 'white'
    // const stroke = black ? 'black' : 'white'
    return (

        <div style={{
            backgroundColor: fill,
            // color: stroke,
            width: "100%",
            height: "100%"
        }}>
            {children}
        </div>
    )
}


export default WhiteSquare