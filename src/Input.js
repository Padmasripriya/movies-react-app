import React, {useState} from 'react';

export function Input(){

    const [ inputValue, setInputValue ] = useState("");
    //conditional rendering
    { inputValue && 
        <h3>{inputValue}</h3>
    }
    return(

        
        <div>
            <input 
            value={inputValue} 
            //longhand syntax
            //onChange={ (event) => setInputValue(event.target.value) }/>
            //Basic syntax
            //onChange={ (e) => setInputValue(e.target.value) }
            onChange={ (e) => {
                if(!e.target.value.includes("y")){
                    setInputValue(e.target.value); //when we hit 'y', it will not display
                }  
            }
                
        }/>
        </div>
        
    )
}