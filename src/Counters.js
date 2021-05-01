import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
    state = { counters:[
        {id:1 , value : 4},
        {id:2 , value : 0},
        {id:3 , value : 0}
    ]};

    deleteMethod = counterId => {
        console.log("this is a delete event!" , counterId)
    }

    render() { 
       
        return (  
            <>
               {this.state.counters.map(counter => 
                <Counter value={counter.value} onDelete={this.deleteMethod} id={counter.id} selected={true} key ={counter.id}/>)
            }
            </>
        );
    }
}
 
export default Counters;