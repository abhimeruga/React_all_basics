import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    static getDerivedStateFromError () {
        return {
            hasError :true,
        }
    }
    render() {
        if(this.state.hasError){
            return(
                <h2> Some thing went wrong </h2>
            )
        }
        else {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
    }
}

export default ErrorBoundary
