import React, { Component } from 'react';
import { Grid, Row,Jumbotron } from 'react-bootstrap';
import _ from 'lodash';
import { SearchBar, VideoDetails, VideoList } from './components/video'
import YTSearch from 'youtube-api-search'
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
    this.videoSearch('Game Of Thrones');   
  }

  videoSearch(search_term){
    const API_KEY = 'AIzaSyAa5rV74n70rq3NlVlM2jb2Op7Q2_w3wDo';
    YTSearch({key:API_KEY, term: search_term}, data => this.setState({videos: data, selectedVideo: data[0]}));
    
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000)

    return (
      
      <div className="App">

      


      <Grid fluid = {true}>
        <Jumbotron>
          <h1>MINI SEARCH</h1>
          <p>A minimalistic youtube search web app.</p>
          <SearchBar search = {videoSearch}/> 
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
