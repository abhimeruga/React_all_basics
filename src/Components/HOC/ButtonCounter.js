import React from 'react';
import UpdatedComponent from './HOC'

function ButtonCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <button onClick={incrementCount}> count - {count} </button>
        </div>
    )
}

export default UpdatedComponent(ButtonCounter)
