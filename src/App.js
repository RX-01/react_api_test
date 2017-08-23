import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar, VideoDetails, VideoList, VideoListItem } from './components/video'

const API_KEY = 'AIzaSyAa5rV74n70rq3NlVlM2jb2Op7Q2_w3wDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <VideoDetails/>
        <VideoList/>
      </div>
    );
  }
}

export default App;
