import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Jumbotron, Grid,Row, Well } from 'react-bootstrap';
import { SearchBar, VideoDetails, VideoList } from './components/video'
import YTSearch from 'youtube-api-search'

// const API_KEY = 'AIzaSyAa5rV74n70rq3NlVlM2jb2Op7Q2_w3wDo';
// YTSearch({key:API_KEY, term: 'surfboard'}, data => console.log(data));

class App extends Component {

  // CONSTRUCTO GETS CALLED FIRST ?
  constructor(props){
    super(props)

    this.state = {
      videos: []
    }
      
  }

  //componentDidMount is executed after first render only on the client side. 
  //This is where AJAX requests and DOM or state updates should occur. 
  //This method is also used for integration with other JavaScript frameworks and any 
  //functions with delayed execution like setTimeout or setInterval. 
  //We are using it to update the state so we can trigger the other lifecycle methods.

  componentDidMount(){
    const API_KEY = 'AIzaSyAa5rV74n70rq3NlVlM2jb2Op7Q2_w3wDo';
    YTSearch({key:API_KEY, term: 'surfboard'}, data => this.setState({videos: data}));
  }

  render() {
    return (
      // <div className="App">

      //  <SearchBar/> 
      //   <VideoDetails/> 
      //    <VideoList videos = {this.state.videos}/> 
       
      // </div>

    
      <Grid>
      <Row className="show-grid">
      <Jumbotron>
      <h1>Hello, world!</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
      </Row>
  
      <Row className="show-grid">
      <Well>Look I'm in a well!</Well>
      </Row>
  

    </Grid>



  
    );
  }
}

export default App;
