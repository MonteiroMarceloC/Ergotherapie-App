import React, { Component } from 'react';
import {connect} from 'react-redux';

class MyHeader extends Component {  
  render() {
    return (
        <header className="App-header">
        {this.props.num === 1 &&
          <p> 
            Willkomen!
          </p>
        }
        {this.props.num === 2 &&
        <div className="Play-header">
          <p className="App-intro"> 
          Versuchen Sie, die Doppel zu finden.<br></br>
          Achtung: Nachdem Sie es einmal gefunden haben, wählen Sie es nicht mehr aus!
          </p>
          <p>
            Punkte: {this.props.pts}
          </p>
        </div>
        }
        </header>
        
    );
  }
}

function mapStateToProps(appState){
  return{
    pontos: appState.done_words.length
  }
}

export default connect(mapStateToProps)(MyHeader);