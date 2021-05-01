import React, { Component } from 'react';

class UpdateSnap extends Component {
    constructor(props){
        super(props)
        this.state = {color:'green'}
    }

    componentDidMount(){
        setTimeout(()=>{this.setState({color:'brown'})} ,
        1000)
    }


    getSnapshotBeforeUpdate(prevColor,prevState){
        document.getElementById('id1').innerHTML = "Before updating the amount of color is " +  prevState.color
    }

    componentDidUpdate(){
        document.getElementById("id2").innerHTML = "After updating the amount of color is " + this.state.color
    }
    render() { 
        return ( 
            <>
                <p style={{marginTop:40}}>we have {this.state.name1} and {this.state.name2}</p>
                <div id="id1"></div>
                <div id="id2"></div>
            </>
         );
    }
}
 
export default UpdateSnap;