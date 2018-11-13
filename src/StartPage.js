import React, { Component } from 'react';
import './index.css';

class StartPage extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Try to find the doubles.
          To begin press start.
        </p>
        <button onClick={this.props.onStartPress} className="btn-start">Start</button>
      </div>
    );
  }
}

export default StartPage;