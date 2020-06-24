import React, { useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'


const BlackSquare=(props)=>{
    const black = false
    const fill = black ? 'white' : 'grey' 
    const [checked, setChecked] = useState(false)
    const checkedIcon = () => {
        setChecked(!checked)
    } 
    
    return(
    
    <div style={{ 
        backgroundColor: fill,
        
        width: "100%",
        height: "100%"
 }}>
            {props.row === 1 || props.row === 2 ? 
            <div style={{ paddingTop: 17 }} onClick={checkedIcon}>
                <FontAwesomeIcon size="4x" icon={faChessQueen} style={checked === true ? 
                    { color: 'yellow' } : { color: 'red' }}   /></div> : null} 
                          
            {props.row === 7 || props.row === 8 ? 
            <div style={{ paddingTop: 17 }} onClick={checkedIcon}>
                <FontAwesomeIcon size="4x" icon={faChessQueen} style={checked === true ? 
                    { color: 'yellow' } : { color: 'black' }} /></div> : null}
     </div>
    )
}


export default BlackSquare