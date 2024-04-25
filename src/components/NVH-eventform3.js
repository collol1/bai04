import React, { Component } from 'react';

class NVHEventform3 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"nguyen van huynh",
            job:"dev sorf"
        }
        
    }
    handlechangename = (ev)=>{
            this.setState({
                name:"k22cnt3-reactjs"
            })
        }
        handlechangejob =(ev)=>{
            this.setState({
                job:"cong nghe phan mem"
            })
        }
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>thay doi du lieu trong state</h2>
                <p>du lieu:{this.state.name} - {this.state.job}</p>
                <button onClick={this.handlechangename}>thay doi name</button>
                <button onClick={this.handlechangejob}>thay doi job</button>
            </div>
        );
    }
}

export default NVHEventform3;
