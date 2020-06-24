import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

const WhiteSquare = (props ) => {
    const black = false
    const fill = black ? 'grey' : 'white'
    const [checked, setChecked] = useState(false)
    const checkedIcon=()=>{
        setChecked(!checked)
    } 

    // const highLightTiles=(i)=>{
    //     i = props.row - 1
    //     console.log(i)
    //     return <div>Vincent</div>
                
       
    // }

    return (
        <Container>
        <div style={{backgroundColor: fill,
                     width: "100%",
                     height: "100%"}}>
            {props.row === 1 || props.row === 2 ?  
            <div onClick={checkedIcon} style={{ paddingTop: 17 }}>
                <FontAwesomeIcon size="4x" icon={faChessQueen} style={checked === true ? 
                    { color: 'yellow'} : { color: 'red' }} /></div> : null}    

            {props.row === 7 || props.row === 8 ? 
            <div onClick={checkedIcon} style={{ paddingTop: 17 }}>
                <FontAwesomeIcon size="4x" icon={faChessQueen} style={checked === true ? 
                    { color: 'yellow'} : { color: 'black' }} /></div> : null}     
            
      
        </div>
        </Container>
    )
}


export default WhiteSquare