import React from 'react'
import BlackSquare from './BlackSquare'
import WhiteSquare from './WhiteSquare'



const Board = ()=>{
   
    
    const evenRows = () => {
      const squares=[]
        for(let i = 0; i < 8; i++)
       {
            if (i % 2 ) {
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><WhiteSquare /></div>)
                
            }
            else{
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><BlackSquare /></div>)
            }


        }
        
      return squares
    }

    const oddRows = () => {
        const squares = []
        for (let i = 0; i < 8; i++) {
            if (i % 2) {
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><BlackSquare /></div>)
                

            }
            else {
                squares.push(<div key={i} style={{ width: '12%', height: '19%' }}><WhiteSquare /></div>)
            }


        }

        return squares
    }


     

        
        return(
            <div style={{ display: 'flex', flexWrap: 'wrap',  height: 600, width: '100%' }} >
                {evenRows()}
                {oddRows()}
                {evenRows()}
                {oddRows()}
                {evenRows()}
                {oddRows()}
                {evenRows()}
                {oddRows()}
                
            
              
             
           </div>
                   
        
        )
    
}

export default Board