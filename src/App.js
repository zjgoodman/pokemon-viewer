import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Counter</h1>
        </div>
        <div>
          Click the button below to increase the count!
        </div>
        <div>
          <button onClick={() => this.setState({count: this.state.count + 1})}>Count!</button>
          <label>Count: {this.state.count}</label>
        </div>
        <div>
          <button onClick={() => this.setState({count: 0})}>Reset count</button>
        </div>
      </div>
    );
  }
}

export default App;
