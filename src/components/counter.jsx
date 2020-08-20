import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:this.props.value
    }
    render() { 
        
        let badgeclass='badge m-2 badge-';    
        badgeclass+=this.state.count>0?'primary':'warning';
        return (
        <React.Fragment>
        {this.props.children}    
        <span className={badgeclass}>{this.state.count}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondry m-2">+</button>
        <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondry m-2">-</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
        <br/>

        
        </React.Fragment>
         );
    }

    
    
}
 
export default Counter;