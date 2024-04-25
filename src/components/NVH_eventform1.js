import React, { Component } from 'react';

class NVHEventform1 extends Component {
     eventhandleclick1 =()=>{
        alert("event handle 1")
    }
    eventhandleclick2(){
        alert("event click 2")
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>event handle</h2>
                <button onClick={this.eventhandleclick1()}>click 1</button>
                <button onClick={this.eventhandleclick2}>click 2</button>
            </div>
        );
    }
}

export default NVHEventform1;
