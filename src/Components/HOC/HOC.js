import React, {Component} from 'react';

const UpdatedComponent = (OriginalComponent) =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount () {
            this.setState((prev)=>{
                return {
                    count:prev.count +1,
                }
            });
        }

        render() {
            return (
                <OriginalComponent count = {this.state.count} incrementCount = {() => {this.incrementCount()}}/>
            )
        }
    }
    return NewComponent;
}

export default UpdatedComponent;