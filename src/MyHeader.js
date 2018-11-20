import React, { Component } from 'react';

class MyHeader extends Component {  
  render() {
    return (
        <header className="App-header">
        {this.props.num == 1 &&
          <p> 
            Willkomen!
          </p>
        }
        {this.props.num == 2 &&
          <p className="App-title"> 
          Versuchen Sie, die Doppel zu finden.<br></br>
          Achtung: Nachdem Sie es einmal gefunden haben, wählen Sie es nicht mehr aus!
          </p>
        }
        </header>
    );
  }
}

export default MyHeader;