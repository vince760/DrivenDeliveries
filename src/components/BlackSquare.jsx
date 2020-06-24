import React from 'react'

const BlackSquare=({black, children})=>{
    const fill = black ? 'white' : 'grey' 
    
    return(
    
    <div style={{ 
        backgroundColor: fill,
        
        width: "100%",
        height: "100%"
 }}>
     {children}
     </div>
    )
}


export default BlackSquare