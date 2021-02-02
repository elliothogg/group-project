import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/test`)
      .then(response => response.json())
      .then(state => this.setState( state ));
      console.log(this.state);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Make Get Request to /api/test</button>
          </form>
          <p> { JSON.stringify(this.state.products) } </p>
          <p> { this.state.products.map(x => 
          <li>flavour: {x.flavour} price: {x.price} </li>)} </p>
        </header>
      </div>
    );
  }
}

export default App;
