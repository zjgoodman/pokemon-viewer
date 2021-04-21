import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      name: 'bulbasaur',
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.setName = this.setName.bind(this);
  }
  previous() {
    if (this.state.count > 1) {
      this.setName(this.state.count - 1);
    }
  }
  next() {
    this.setName(this.state.count + 1);
  }
  setName(index){
    const url = "https://pokeapi.co/api/v2/pokemon/" + index;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({count: index, name: json.name});
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Zach's incredible pokemon viewer app</h1>
        </div>
        <div>
          <p><label className="App-count">#{this.state.count}</label></p>
        </div>
        <div>
          <img src={"https://img.pokemondb.net/sprites/x-y/normal/" + this.state.name +".png"} alt={this.state.name} />
          <h1>{this.state.name}</h1>
        </div>
        <div>
          <button class="App-button" onClick={this.previous}>Previous</button>
          <label> </label>
          <button class="App-button" onClick={this.next}>Next</button>
        </div>
        <div>
          <p>Use the buttons above to cycle through Pokemon sprites.</p>
        </div>
        <div>
          <h3>About</h3>
          <p></p>
          <p>This app keeps count of an index, then obtains the name of the pokemon that corresponds to that index by invoking the following api: <b>"https://pokeapi.co/api/v2/pokemon/{this.state.count}"</b></p>
          <p>The name is then used to obtain a picture with the following url: <b>"https://img.pokemondb.net/sprites/x-y/normal/{this.state.name}"</b></p>
        </div>
      </div>
    );
  }
}

export default App;
