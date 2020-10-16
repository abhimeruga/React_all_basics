import {useState} from 'react'

function useCounter() {
    const [count, setCount] = useState(0);
    function incrementCounter() {
        setCount(count + 1)
    }
    function decrementCounter() {
        setCount(count - 1)
    }
    function reset() {
        setCount(0)
    }
    return [count, incrementCounter, decrementCounter, reset]
}

export default useCounter
