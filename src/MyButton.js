import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setSelection, resetSelection, addDone} from './actions'

class MyButton extends Component {
  constructor(props){
    super(props)
    this.state={  //default colors for the button
      color: "#000",
      colortxt: "#fff"
    }
    this.handleclick = this.handleclick.bind(this); //there is an error here, dont know why!
  }

  handleClick()
  {
    //TODO: test if I am white
    if (this.props.done.some(e => e === this.props.what.name)){//if it is on appState.done array
      this.setState({color: "#c22", colortxt: "#c22"})//red
    }
    else if (this.props.selection === ''){ //if selection is empty (fisrt click)
      this.setState({color: "#08c", colortxt: "#08c"})//blue
      this.props.dispatch(setSelection(this.props.what.name))//setSelection to MyButton's name
    }
    else if (this.props.what.name === this.props.selection){ //if the selection is my pair
      this.setState({color: "#2c2", colortxt: "#2c2"})//green
      this.props.dispatch(resetSelection); //reset selection to ''
      this.props.dispatch(addDone(this.props.what.name)); //add to appState.done array
    }
    else{
      this.setState({color: "#c22", colortxt: "#c22"})//red
      //TODO: set a Timer to turn it to white after 1 second
    }
    this.props.clickedMe(this.props.what);
    console.log(this.props);
  } 

  render() {
    return (
      <td style={{borderColor: this.state.color, background: this.state.colortxt}}>
      <a onClick={this.handleclick}>
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
    done: appState.done,
    selection: appState.selection
  }
}

export default connect(mapStateToProps)(MyButton);