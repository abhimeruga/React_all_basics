import React from 'react'

function RenderCounter(props) {
    return (
        <div>
            <button onClick={props.incrementCounter}> Render count - {props.count}</button>
        </div>
    )
}

export default RenderCounter
