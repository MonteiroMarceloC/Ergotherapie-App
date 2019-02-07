import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setSelection, resetSelection, addDone, newTurn} from './actions'

class MyButton extends Component {
  constructor(props) {
    super(props)
    this.state={  //default colors for the button
      color: "#000",
      colortxt: "#fff"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {
    //TODO: test if I am white
   /*if ( ){//if it is on appState.done array
      this.setState({color: "#c22", colortxt: "#c22"})//red
    }
    else */ if (this.props.selection === ''){ //if selection is empty (first click)
      this.setState({color: "#08c", colortxt: "#08c"})//blue
      this.props.dispatch(setSelection(this.props.what.name))//setSelection to MyButton's name
    }
    else if (this.props.what.name === this.props.selection){ //if the selection is my pair
      this.makemeGreen();
      this.props.dispatch(addDone(this.props.what.name)); //add to appState.done array

    }
    else {
      this.makemeRed();
    }
    this.props.dispatch(newTurn());
  }

  makemeGreen(){
    this.setState({color: "#2c2", colortxt: "#2c2"})
    console.log(this.props.done);
  }

  makemeRed(){
    this.setState({color: "#c22", colortxt: "#c22"})
    setTimeout(function() { //Start the timer to turn white again
      this.setState({color: "#000", colortxt: "#fff"})
    }.bind(this), 1500)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.color == "#08c" && this.props.new_turn) {
      if(this.props.done.indexOf(this.props.what.name)>=0 && this.props.selection == this.props.what.name){
        this.makemeGreen();
      } else {
        this.makemeRed();
      }
      this.props.dispatch(resetSelection());
    }
  }

  render() {
    return (
      <td style={{borderColor: this.state.color, background: this.state.colortxt}}>
      <a onClick={this.handleClick}>
        <img className='img-btn'
          alt={this.props.what.name}
          src={this.props.what.img} />
          <p className='App-intro'
            style={{background: this.state.colortxt}}
          >{this.props.what.name}</p>        
      </a>
      </td>
    );
  }
}

function mapStateToProps(appState){
  return{
    done: appState.done_words,
    selection: appState.selection,
    new_turn: appState.new_turn,
  }
}

export default connect(mapStateToProps)(MyButton);