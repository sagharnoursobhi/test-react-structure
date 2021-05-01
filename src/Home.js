import React, { Component } from 'react';
import SeeMore from './SeeMore'
import './index.css'



class Home extends Component {
    render() { 
        return ( 
            
            <>
                
                <h1>this is home page</h1>
                <p className="more"><SeeMore/></p>
            </> 
            
            );
    }
}
 
export default Home;