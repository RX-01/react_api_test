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

    // onInputChange(event) {
    //     console.log(event.target.value)
    // }


    render() {
        return (
            <Col sm={6} md ={6} xsOffset={3}>
            
            <FormControl type="text" 
            placeholder="Search" 
            value= {this.state.term} 
            onChange = {event => this.setState({term: event.target.value})}
            />
            
           </Col>
          
            
        );
    }
}

// <input type="search" placeholder="Enter Video" value= {this.state.term}
// onChange = {event => this.setState({term: event.target.value})} />