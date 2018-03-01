import React, { Component } from 'react';
// Components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

//data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Practica React" items={items} />
        <Content />
        <Footer copyright="&copy; Kbaez 2018"/>
      </div>
    );
  }
}

export default App;