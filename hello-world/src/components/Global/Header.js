//dependencies
import React, { Component } from 'react';
import ProTypes from 'prop-types';
import {Link} from 'react-router-dom';
//assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: ProTypes.string.isRequired,
    items: ProTypes.array.isRequired
  };

  createListItem(item, key){
    return <li key={key}><Link to={item.url}>{item.title}</Link></li>
  }

  render() {
    const {title, items} = this.props;

    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          
          <ul className="Menu">
          {
            items && items.map(this.createListItem) 
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;