import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">水泥工业生产环境调查系统</h1>
        </header>
{/* <p className="App-intro">
          }          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
 */}       <ul role="nav" className="Navi">
              <li><Link to="/login" activeClassName="ActiveLi" activeStyle={{ color: 'red'}}>login</Link></li>
              <li><Link to="/reg">register</Link></li>
          </ul>
      </div>
    );
  }
}

export default App;
