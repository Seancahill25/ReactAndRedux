import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      {name: 'Sean' , age: 26, belt: 'black', id: 1},
      {name: 'Shawn' , age: 32, belt: 'green', id: 2},
      {name: 'Shaun' , age: 19, belt: 'purple', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    }) ;
    this.setState({
      ninjas: ninjas
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>

      </div>
    );
  }
}

export default App;
