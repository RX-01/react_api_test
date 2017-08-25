import React, {Component} from 'react';
import { FormControl, Col } from 'react-bootstrap';
// export const SearchBar = () => {
    //     return (
    //         <div>
    //             <input type="search" name="" id="" />
    //         </div>
    //     );
    // }



// Use Class (State) Components when you need a component to be self aware
export class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            term: ''
        }
    }
    // funtion if needed 
    OnInputChange(searchterm) {
        this.setState({term: searchterm})
        this.props.search(this.state.term)
    }

    render() {
        return (
            <Col sm={4} md ={4} xsOffset={4}>
            
            <FormControl type="text" 
            placeholder="Whats your favorite video ?" 
            value= {this.state.term} 
            onChange = {event => this.OnInputChange(event.target.value)} 
            // onChange = {event => this.setState({term: event.target.value})}
            // onSearched = {this.props.search(this.state.term)} 
            />
            
           </Col>
          
            
        );
    }
}

// <input type="search" placeholder="Enter Video" value= {this.state.term}
// onChange = {event => this.setState({term: event.target.value})} />