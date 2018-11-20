import React, { Component } from 'react';
import './index.css';
import MyHeader from './MyHeader.js';


class StartPage extends Component {
  render() {
    return (
      <div className="App-intro">
        <MyHeader num={1} />
        <p>
          Versuchen Sie, die Doppel zu finden. </p>
        <p>
         <b>Achtung: </b><br></br>Nachdem Sie es einmal gefunden haben, wählen Sie es nicht mehr aus!
        </p><br></br>
        <button onClick={this.props.onStartPress} className="btn-start">Start</button>
      </div>
    );
  }
}

export default StartPage;