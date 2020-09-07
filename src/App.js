import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Jan Nowak';
    const loading = false;
    const showName = false;

    return (
      <div className='App'>
        {loading ? <h4>Loading...</h4> : <h1>Hello from {showName && name}</h1>}
      </div>
    );
  }
}

export default App;
