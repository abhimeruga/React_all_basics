import React from 'react'
import B from './B'
import UserProvider from './UserContext'

function A() {
    return (
        <div>
            component A
            <UserProvider value="name">
                <B />
            </UserProvider>
        </div>
    )
}

export default A
