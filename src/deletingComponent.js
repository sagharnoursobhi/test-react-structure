import React, { Component } from 'react';

class DeletingComponent extends Component {
    constructor(props){
        super(props)
        this.state= {show:true}
        this.state.healer = this.state.bind(this.healer)
    }
     healer = ()=>{

    }
    render() { 

        return ( 
            <>

            </>
         );
    }
}
 
export default DeletingComponent;