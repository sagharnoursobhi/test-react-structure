import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import DidMount from './didMount';
import GetDerived from './getDerived';
import Home from './Home';
import Navbar from './Navbar'
import Refrence from './refrence';
import UpdateSnap from './updateSnap';


ReactDOM.render(
  <>
    <Navbar/>
    <Home/>
    <Refrence/>
    <GetDerived favColor="yellow"/>
    <DidMount/>
    <UpdateSnap/>
    <About/>
  </>,
  document.getElementById('root')
);


