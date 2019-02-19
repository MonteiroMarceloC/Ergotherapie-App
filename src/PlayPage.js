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
import Products from './imgs/products.jpg';
import Post from './imgs/post.jpg';
import Pills from './imgs/pills.jpg';
import Pills2 from './imgs/pills2.jpg';
import Coffee from './imgs/coffee.jpg';
import Full from './imgs/full.jpg';
import Blume from './imgs/blume.jpg';
import Milch from './imgs/milch.jpg';

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
    name: 'geleert',
    img: Post
  },
  {
    name: 'nachgekauft',
    img: Products
  },
  {
    name: 'abends genommen',
    img: Pills
  },
  {
    name: 'morgens genommen',
    img: Pills2
  },
  {
    name: 'gefüllt',
    img: Full
  },
  {
    name: 'nachgefüllt',
    img: Coffee
  },
  {
    name: 'besorgt',
    img: Milch
  },
  {
    name: 'gegossen',
    img: Blume
  },
  {
    name: 'ausgemacht',
    img: Machine
  }]

class PlayPage extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      alldata: [],
      lastclick:'',
      done: [],
      selectedIndexes: {}
    }
  }

  componentDidMount(){
    this.newscreen();
  } 

  newscreen(){
    //remove 5
    var auxarr = [...data];
    while (auxarr.length > 9) {
    auxarr.splice(Math.random()*auxarr.length, 1);
    }
    console.log(auxarr);
    //create 3 clones
    var auxarr2 = [];
    while (auxarr2.length < 3){
      auxarr2.push(auxarr[Math.floor(Math.random() * auxarr.length)]);
    }
    //randomize
    let array = [...auxarr,...auxarr,...auxarr2,...auxarr2];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    }
    let arrSize = 8;
    let arrMaster=[];
    for (let i=0; i<array.length; i+=arrSize) {
      arrMaster.push(array.slice(i,i+arrSize));
    }
    this.setState({alldata: arrMaster})
  }

  handleClick(e){
    if (this.state.lastclick === ''){
      this.setState({lastclick: e.name})
    } else if (this.state.lastclick === e.name){
      this.setState((prev)=>({
        done: prev.done.push(e.name)
      }))
      this.setState({lastclick: ''});
    }
  }

  render() {
    return (
      <div>
      <MyHeader num={2} />
      <div id='tabela'>               
        {this.state.alldata[2] && //wait until alldata matrix is ready
          <table><tbody>
          {this.state.alldata.map((row, index)=>
          <tr>
            {row.map((elem)=>
                <MyButton what={elem}           
                />
            )}
          </tr>
          )}
          </tbody></table>
        }
      </div>
      </div>
    );
  }
}

export default PlayPage;