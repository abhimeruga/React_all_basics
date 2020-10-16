import React from 'react';
import UpdatedComponent from './HOC'

function MouseOverCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <h3 onMouseOver={incrementCount}> count - {count} </h3>
        </div>
    )
}

export default UpdatedComponent(MouseOverCounter)
