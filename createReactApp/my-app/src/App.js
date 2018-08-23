import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Sean' , age: 26, belt: 'black', id: 1},
      {name: 'Shawn' , age: 32, belt: 'green', id: 2},
      {name: 'Shaun' , age: 19, belt: 'purple', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>

      </div>
    );
  }
}

export default App;
