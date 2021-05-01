
import React , {Component} from 'react';

class DidMount extends React.Component {
    constructor(props){
        super(props)
        this.state = {favoriteColor:"blue"}
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({favoriteColor : "red"})} ,
        1000)
    }
    render() { 
        return ( 
            <>
                <h1>this is a {this.state.favoriteColor} car</h1>
                
            </>
         );
    }
   
}
 
export default DidMount;