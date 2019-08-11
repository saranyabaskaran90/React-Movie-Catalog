import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import SearchResult from './components/searchresultcontainer/SearchResult';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div><Header />
        <SearchResult /> </div>
    );
  }
}
export default App;
