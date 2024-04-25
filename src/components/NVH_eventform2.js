import React from 'react';

const NVHEventform2 = () => {
    const eventhandleclick1 =(content)=>{
        console.log('================================');
        console.log(content);
        console.log('=================================');
    }
    return (
        <div className='alert alert-success'>
            <h2>event demo - function Component</h2>
            <button onClick={eventhandleclick1("nguyen van huynh")}>goi khi render</button>
            <button onClick={()=>eventhandleclick1("k22cnt3-reactjs")}>goi khi click</button>
        </div>
    );
}

export default NVHEventform2;

