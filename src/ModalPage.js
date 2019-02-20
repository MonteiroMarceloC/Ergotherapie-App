import React, { Component } from 'react';

class ModalPage extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
    this.closeMe = this.closeMe.bind(this);
  }

  closeMe(){
    this.props.close(false);
  }

  render() {
    return (
      <div id="myModal" className="modal" style={{display: this.props.display}}>
        <div className="modal-content">
          <span className="close" onClick={this.closeMe}>&times;</span>
          <p className="App-intro">Glückwunsch, Sie haben die Herausforderung abgeschlossen!<br/>
                                    Drücken Sie F5, um neu zu starten.</p>
          {//<button className="btn-start" onClick={this.props.restart}>Nächstes Level</button>
          }
        </div>
      
      </div>
    );
  }
}

export default ModalPage;