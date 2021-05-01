import React, { Component } from 'react';

class Refrence extends Component {
  constructor(props){
      super(props)
      this.state = {brand:'Toyota' , name:'Ford' , model:'2015'}
  }
    shouldComponentUpdate(){
        return false
    }
   changeModel = ()=> {
    this.setState({brand:'Benz' , name:'w320'})
  }
  
    render() { 
        return ( 
            <>
                <button type="button" onClick={this.changeModel}>changeModel</button>
                <p>
                    This is a car which is {this.state.brand} and {this.state.name} , and {this.state.model}
                </p>
            </>
         );
    }
}
 
export default Refrence;