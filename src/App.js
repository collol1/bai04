import React, { Component } from 'react';
import NVHEventform1 from './components/NVH_eventform1';
import NVHEventform2 from './components/NVH_eventform2';
import NVHEventform3 from './components/NVH-eventform3';
import NVHEvenform4 from './components/NVH_evenform4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>event form demo</h1>
        <NVHEventform1/>
        <NVHEventform2/>
        <NVHEventform3/>
        <NVHEvenform4 name="nguyen van huynh"/>
      </div>
    );
  }
}

export default App;
