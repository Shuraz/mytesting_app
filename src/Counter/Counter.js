import React,{useState} from 'react'
import  './Counter.css';
function Counter() {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    return (
        <div>
            <h3 data-testid="header">My Counter</h3>
            <h1 data-testid="counter"
     className={ counter>= 100 ? 'green' : counter <= -100 ? 'red' : ''}
            >
                {counter}
            </h1>
            <button 
            data-testid="add-btn"
            onClick={()=>{setCounter(counter+inputValue)}}
            >+</button>
        <input data-testid="input" 
                className="text-center"
                type="number" 
                value={inputValue}
                onChange={(e)=>{
                    setInputValue(parseInt(e.target.value));
                }}
                />
        <button data-testid="subtract-btn"
        onClick={()=>{setCounter(counter-inputValue)}}
        >-</button>

        </div>
    ) 
}

export default Counter
