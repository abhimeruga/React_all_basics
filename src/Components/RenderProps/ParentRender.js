import React, { Component } from 'react'

export class ParentRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);   
    }

    incrementCounter () {
        this.setState((prev)=>{
            return {
                count: prev.count + 1,
            }
        })
    }
    
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCounter)}
            </div>
        )
    }
}

export default ParentRender
