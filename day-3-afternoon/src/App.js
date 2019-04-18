import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import data from './data';



class App extends Component {
  constructor(props){
    super(props);

    this.state={
      data:data,
      index:0,
      edit:" "
    }
    this.next=this.next.bind(this)
    this.previous=this.previous.bind(this)
    this.edit=this.edit.bind(this)
  }

  next(){
    if(this.state.index >= data.length-1){
      this.setState({index:0})
    } else{
    this.setState({index: this.state.index+1})
    }
  }

  previous(){
    this.setState({index: this.state.index-1})
  }

  edit(){
    this.setState({index: this.state.data})
  }
  render() {
    return (
      <div className="App">
        <nav>
          <a>Home</a>
        </nav>
        <div>
          <section className = 'card'>
          <p>{this.state.index +1}/{data.length}</p>
            <Card data={this.state.data[this.state.index]}/>
            <button onClick = {this.next}>Next</button>
            <button onClick = {this.previous}>Previous</button>
            <button onClick = 'Edit'>Edit</button>
            <button onClick = 'Delete'>Delete</button>
            <button onClick = 'New'>New</button>
          </section>
        </div> 
      </div>
    );
  }
}

export default App;
