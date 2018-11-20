import React, { Component } from 'react';
import './index.css';
import MyButton from './MyButton.js';
import MyHeader from './MyHeader.js';
import Suppe from './imgs/suppe.jpg';
import Cats from './imgs/cats.jpg';
import Dog from './imgs/dogwater.jpg';
import Shop from './imgs/shop.jpg';
import Door from './imgs/door.jpg';
import Machine from './imgs/machine.jpg';


const data=[
  {
    name: 'gesalzen',
    img: Suppe,
  },
  {
    name: 'gefüttert',
    img: Cats
  },
  {
    name: 'Wasser gegeben',
    img: Dog
  },
  {
    name: 'eingekauft',
    img: Shop
  },
  {
    name: 'zugezogen',
    img: Door
  },
  {
    name: 'ausgemacht',
    img: Machine
  }
]

class PlayPage extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      alldata: data.concat(data),
      lastclick:'',
      done: [],
      selectedIndexes: {}
    }
  }

  componentDidMount(){
      //randomize array of data
      let array = this.state.alldata;
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          console.log(j);
          let aux = array[i];
          array[i] = array[j];
          array[j] = aux;
      }
      let arrSize = 4;
      let arrMaster=[];
      for (let i=0; i<array.length; i+=arrSize) {
        arrMaster.push(array.slice(i,i+arrSize));
      }
      this.setState({alldata: arrMaster})
  }
  componentDidUpdate(){
    console.log(this.state)
  }

  handleClick(e){
    console.log(`clicou em ${e.name}`)
    if (this.state.lastclick == ''){
      this.setState({lastclick: e.name})
    } else if (this.state.lastclick == e.name){
      this.setState((prev)=>{
        done: prev.done.push(e.name)
      })
      this.setState({lastclick: ''})
    }
  }

  render() {
    return (
      <div>
      <MyHeader num={2} />
      <div id='tabela'>               
        {this.state.alldata[1][3] &&
          <table>
          {this.state.alldata.map((row, index)=>
          <tr>
            {row.map((elem)=>
                <MyButton what={elem} isSelected={this.state.selectedIndexes[index]}
                  clickedMe={(e) => this.handleClick(e)}
                  
                  />
            )}
          </tr>
          )}
          </table>
        }
      </div>
      </div>
    );
  }
}

export default PlayPage;