import React, { Component } from 'react';
import './index.css';
import StartPage from './StartPage.js';
import PlayPage from './PlayPage.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      page: 'start'
    }
    this.changeScreen1 = this.changeScreen1.bind(this);
  }

  changeScreen1(){
    this.setState({page: 'play'});
  }

  render(){
    return (
      <div className="App">
        {
          this.state.page==='start' &&
          <StartPage onStartPress={this.changeScreen1}/>
        }
        {this.state.page==='play' && <PlayPage/> }
      </div>
    );
  }
}

export default App;