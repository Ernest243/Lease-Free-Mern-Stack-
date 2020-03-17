import React, { Component } from 'react';
import { Form, Button, Container, Nav, Div, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class Search extends Component {

  constructor(props)
  {
      super(props);

      this.state = {
          query: "",
          results: [],
          showResults: false
      }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    }, () => {
      if(this.state.query.length > 1){
        this.search(this.state.query);
        this.setState({
          showResults: true
        })
      }
      if(this.state.query === ""){
        this.setState({
          showResults: false
        })
      }
    })
  }

  search = () => {
    axios.get("http://localhost:5001/property", {params: this.state.query})
      .then(response => {
        const results = (response.data).map(property => ({
          property_name: property.property_name,
          city: property.city,
          state: property.state,
          zipCode: property.zipCode,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          pets_allowed: property.pets_allowed,
          laundry: property.laundry,
          parking: property.parking
        }));
        this.setState({results});
      })
  };

  filterSearch = () => {
    const filteredResults = this.state.results.filter(property => property.city.includes(this.state.query));
    return(
      <ul class="results" style={{display: this.state.showResults? 'block' : 'none'}}>
        {filteredResults.map( function (filteredResults, index){
            return (
              <div key={index}>
                <h1>name: {filteredResults.property_name}</h1>
                <h2>location: {filteredResults.city},{filteredResults.state}</h2>
              </div>
            )
          }
          )
        }
      </ul>
    )
  }
  render()
    {
        return(
          <Container>
            <Form>
              <input onChange={this.handleChange} placeholder="Enter a city" type="search"/>
            </Form>
              {this.filterSearch()}
          </Container>
        )
    }
}
export default Search
