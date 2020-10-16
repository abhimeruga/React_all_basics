import React from 'react'

function HeroName(props) {
    if(props.name === 'Joker') {
        throw Error;
    } else {
        return (
            <div>
                {props.name} is a wonder
            </div>
        )
    }
    
}

export default HeroName
