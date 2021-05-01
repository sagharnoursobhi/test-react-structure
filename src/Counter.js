import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    state = {
        counter: this.props.value
      }

      additionClick = (key) =>{
          console.log(key)
          this.setState({counter: this.state.counter + 1})//using predefined method inside another method = arrow function
      }

      countMethod(){
          let {counter} = this.state;
         return counter === 0 ? 'zero' : counter       
    }


    newStyles(){
        let classes = "m-2 text-dark border- "
        classes += (this.state.counter === 0) ? "primary" : "danger"
        return classes
    }
    render() { 
        return ( 
            <>
                <div>
                    <span><button className="bg-red m-3" onClick={()=>this.additionClick({id:1})}>increment</button></span>
                    <span><button className="border-blue bg-red m-3" onClick={()=>this.props.onDelete(this.props.key)}>Delete</button></span>
                    <span className="m-3"><p className={this.newStyles()}>{this.countMethod()}</p></span>
                </div>

            </>
         );
     
    }
}
 
export default Counter;