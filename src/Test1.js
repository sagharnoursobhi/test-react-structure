import React, { Component } from 'react';
import ScreenShot from './images/fol1/profile.jpeg'
import Whatsup from './images/Screen.png'
import Skills from './images/fol1/skills.png'
import 'bootstrap/dist/css/bootstrap.min.css';

class Test extends Component {
    state ={
        count:0 ,
        imgUrl : "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        listItems: ["list1","list2","list3"],
        id:0
    };

    // constructor(){
    //     super();
    //     this.clickMethod = this.clickMethod.bind(this)
    // }

    tageRender(){
        if (this.state.listItems.length === 0) return <p>There are no lists</p>
        return <ol>{this.state.listItems.map(a=><li key={a}>{a}</li>)}</ol>
    }

    clickMethod = (e)=>{//instead of using constructor we use arrow function that inheritences this
        console.log(e);
        this.setState({count:this.state.count + 1})
    }

    render() { 
        return (  
            <div>
                <span className={this.newStyles()}>{this.countItem()}</span>
                <button className="badge badge-danger" onClick={()=>this.clickMethod({id:1})}>Increment</button>
                {this.state.listItems.length === 0 && "plz insert a new list"}
                {this.tageRender()}
                <h1 className={this.newStyles()}>hello</h1>
                <h1 style={{fontSize:'50px'}}>hello</h1>
                <img src={ScreenShot} alt="screen"/>
                <img src={Whatsup} alt="whatsup"/>
                <img src={Skills} alt="skills"/>
            </div>
        );
    }
    newStyles() {
        let classes = "m-2 border-bottom border-";
        classes += (this.state.count === 0) ? "primary" : "danger";
        return classes;
    }

     countItem(){
        const {count} = this.state
         return count === 0 ? 'zero' : count
    }
}
 
export default Test;