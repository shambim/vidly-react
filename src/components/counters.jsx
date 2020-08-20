import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counter_lists:[
            {id:1, name:"counter1", value:6},
            {id:2, name:"counter2", value:5},
            {id:3, name:"counter3", value:2},
            {id:4, name:"counter4", value:4},
        ]
    }

    handleDelete=(counter_id)=>{
        
        const counter_lists=this.state.counter_lists.filter(c => c.id !== counter_id);
        this.setState({
            counter_lists:counter_lists
        })
    };

    handleIncrement=(counter)=>{
        let counterIndex=this.state.counter_lists.indexOf(counter);
        
        let counter_lists=[...this.state.counter_lists];
        
        counter_lists[counterIndex]={...counter};
       
        counter_lists[counterIndex].value++;
       
        this.setState({counter_lists});
        
    }
    handleDecrement=(counter)=>{
        let counterIndex=this.state.counter_lists.indexOf(counter);
        
        let counter_lists=[...this.state.counter_lists];
        
        counter_lists[counterIndex]={...counter};
       
        counter_lists[counterIndex].value--;
       
        this.setState({counter_lists});
    }

    render() { 
        
    return ( <div>{this.state.counter_lists.map(counter => 
    
    <Counter key={counter.id} 
    onDelete={this.handleDelete} 
    onIncrement={this.handleIncrement} 
    onDecrement={this.handleDecrement} 
     value={counter.value} counter={counter} >
        <h4>Counter #{counter.id}</h4>
    </Counter>    
    
    )}</div>);
    }
}
 
export default Counters;