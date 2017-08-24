import React, { Component } from 'react';
import { Button, Navbar, Grid, Row,FormGroup,Jumbotron } from 'react-bootstrap';
import { SearchBar, VideoDetails, VideoList } from './components/video'
import YTSearch from 'youtube-api-search'
import logo from './logo.svg';
import './App.css';


class App extends Component {

  // CONSTRUCTO GETS CALLED FIRST ?
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
      
  }

  //componentDidMount is executed after first render only on the client side. 
  //This is where AJAX requests and DOM or state updates should occur. 
  //This method is also used for integration with other JavaScript frameworks and any 
  //functions with delayed execution like setTimeout or setInterval. 
  //We are using it to update the state so we can trigger the other lifecycle methods.

  componentDidMount(){
    const API_KEY = 'AIzaSyAa5rV74n70rq3NlVlM2jb2Op7Q2_w3wDo';
    YTSearch({key:API_KEY, term: 'Game Of Thrones'}, data => this.setState({videos: data, selectedVideo: data[0]}));
    
    
  }

  render() {
    return (
      
      <div className="App">

      


      <Grid fluid = {true}>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <SearchBar/> 
        </Jumbotron>

      <Row className="show-grid">
        <VideoDetails video_data = {this.state.selectedVideo}/> 
        <VideoList videos = {this.state.videos} OnSelectedVideo = {video => this.setState({selectedVideo: video})}/> 
      </Row>

    </Grid>

   
      </div>


  
  
    );
  }
}

export default App;
