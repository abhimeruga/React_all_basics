import React, {useState} from 'react'
import useCounter from './useCounter'

function CounterOne() {
    const [count, incrementCounter, decrementCounter, reset] = useCounter(0);
    return (
        <div>
            count - {count} 
            <button onClick={()=> incrementCounter()}>increment one </button>
            <button onClick={()=> decrementCounter()}>decrement one </button>
            <button onClick={()=> reset()}>reset </button>        
        </div>
    )
}

export default CounterOne
