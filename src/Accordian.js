import React, {useState} from "react";

export function Accordian(){

    const [ isToggled, setIsToggled ] = useState(false);
    return (
        <div>
            { isToggled ?
            <h3>Show me {isToggled}</h3>
            : null
            }
           <button
            onClick={ () => setIsToggled(!isToggled)}
           >Toggle</button>
        </div>
    );
}