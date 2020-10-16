import React, {useState} from 'react'
import useCounter from './useCounter'

function CounterTwo() {
   const [count, incrementCounter, decrementCounter, reset] = useCounter(0);
    return (
        <div>
            count - {count} 
            <button onClick={()=> incrementCounter()}>increment </button>
            <button onClick={()=> decrementCounter()}>decrement </button>
            <button onClick={()=> reset()}>reset </button>        
        </div>
    )
}

export default CounterTwo
