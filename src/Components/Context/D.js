import React from 'react';
import UserConsumer from './UserContext'

function D() {
    return (
        <div>
            Component - D
            <UserConsumer>
                {
                    (name) => {
                        return(
                            <div>
                            {name}
                        </div>
                        )                        
                    }
                    
                }
            </UserConsumer>
        </div>
    )
}

export default D
