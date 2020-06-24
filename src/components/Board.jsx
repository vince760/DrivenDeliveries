import React from 'react'
import Even from './Even'
import Odd from './Odd'


const Board = ()=>{
     

        
        return(
            <div  style={{ display: 'flex', flexWrap: 'wrap',  height: 600, width: '100%' }} >
                <Even key={1} row={1}/>
                <Odd key={2} row ={2}/>
                <Even key={3} row={3}/>
                <Odd key={4} row={4} />
                <Even key={5} row={5} />
                <Odd key={6} row={6}/>
                <Even key={7} row={7}/>
                <Odd key={8} row={8}/>
             
            </div>
                   
        
        )
    
}

export default Board