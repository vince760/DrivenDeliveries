import React from 'react'
import Even from './Even'
import Odd from './Odd'


const Board = ()=>{
     

        
        return(
            <div style={{ display: 'flex', flexWrap: 'wrap',  height: 600, width: '100%' }} >
                <Even row={1}/>
                <Odd row ={1}/>
                <Even />
                <Odd />
                <Even />
                <Odd />
                <Even row={2}/>
                <Odd row={2}/>
                
            
              
             
           </div>
                   
        
        )
    
}

export default Board