import React, { Component } from 'react';
import './index.css';

class MyButton extends Component {
  constructor(props){
    super(props)
    this.handleclick = this.handleclick.bind(this);
    this.state={
      color: "#000",
      colortxt: "#fff"
    }
  }

  handleclick()
  {

    this.setState({color: "#08c", colortxt: "#08c"})
    this.props.clickedMe(this.props.what);
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

export default MyButton;