import React from 'react';
import '../css/counter.css';

const Counter = ({counter, onIncrement, onDecrement, onDelete}) => {
    return ( 
        <div>
            <span>{counter.value}</span>
            <button 
                className="incrementDecrementButton"
                onClick={()=>onIncrement(counter)}
            >+
            </button>
            <button 
                className="incrementDecrementButton"
                onClick={()=>onDecrement(counter)}
                disabled={disableButton(counter)}
            >-
            </button>
            <button 
                className="deleteButton"
                onClick={()=>onDelete(counter)}
            >Delete
            </button>
        </div>
     );

    function disableButton(counter){
        return (counter.value === 0)? "disabled":"";
     }

}
 
export default Counter;