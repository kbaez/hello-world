import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		count: 0
  	};

  	this.handleCountClick = this.handleCountClick.bind(this);
  }

  componentDidMount(){
  	//si el componente cargo
  	this.setState({
  		count: 1
  	})
  }

  handleCountClick(e){
  	console.log(e);
  }

  render() {
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>

        <p>
        	<button id="add" onClick={this.handleCountClick}>+</button>
        	<button id="subtract" onClick={this.handleCountClick}>-</button>
        	<button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>
      </div>
    );
  }
}

export default Content;