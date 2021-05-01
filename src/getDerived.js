import React, { Component } from 'react';

class GetDerived extends Component {
    constructor(props){
        super(props)
        this.state={favColor:'red'}
    }
    
    static getDerivedStateFromProps(props , state){
        return{favColor : props.favColor}
    }
    render() { 
        return ( 
            <>
                <p> My favorite color is {this.state.favColor}</p>
            </>
         );
    }
}
 
export default GetDerived;