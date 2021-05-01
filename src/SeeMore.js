import React, { Component } from 'react';
import './index.css'
import {Link , BrowserRouter as Router, Route } from 'react-router-dom'
import Counter from './Counter';


class SeeMore extends Component {
    render() { 
        return ( 
            <Router>
                <h3 className="more"><Link style={{textDecoration:'none'}} to="/counter">To see more click here...</Link></h3>
                <Route path="/counter" component={Counter}></Route>
            </Router>
         );
    }
}
 
export default SeeMore;