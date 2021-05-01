import React from 'react';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import Home from './Home'
import About from './About'

function Navbar() {
        return ( 
                <Router>
                        <li><Link exact to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <div>
                            <Route path="/" component={Home} />
                            <Route path="/about" component={About}/>
                        </div>
                </Router>

         );
    }
 
export default Navbar;