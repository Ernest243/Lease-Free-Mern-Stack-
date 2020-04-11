import React, { Component } from 'react';
import { Form, Button, Container, Row, Col, Card, FormControl, CardDeck} from 'react-bootstrap';
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

  // updates the state to query the database with the entered text
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

  // Searches the database with the parameter of the text entered into the search bar
  search = () => {
    axios.get("http://localhost:5001/Property", {params: this.state.query})
      .then(response => {
        const results = (response.data).map(property => ({
          property_name: property.property_name,
          city: property.city,
          state: property.state,
          zipCode: property.zipCode,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          price: property.price,
          dogs_allowed: property.dogs_allowed,
          cats_allowed: property.cats_allowed,
          washer_dryer: property.washer_dryer,
          garage: property.garage,
          swimming_pool: property.swimming_pool,
          parking_lot: property.parking_lot
        }));
        this.setState({results});
      })
  };

  // This shows the results of the search by filtering the database to select properties that match the inputed city
  // It then maps the results to an index so the properties can be shown individually to the user
  filterSearch = () => {
    const filteredResults = this.state.results.filter(property => property.city.includes(this.state.query));
    return(
      <ul class="results" style={{display: this.state.showResults? 'block' : 'none'}}>
        {filteredResults.map( function (filteredResults, index){
            return (
              <CardDeck style = {{width: "90%", marginLeft: "auto", marginRight: "auto"}}>
                  <Card style = {{ padding: "30px", margin: "60px"}}>
                      <div style = {{textAlign: "left"}}>
                        <Card.Title style = {{fontSize: "2.5em"}}>{filteredResults.property_name}</Card.Title>
                        <h4>${filteredResults.price}/month</h4>
                        <h5>Bedrooms: {filteredResults.bedrooms} Bathrooms: {filteredResults.bathrooms}</h5>
                        <h6 className="text-muted">{filteredResults.city},{filteredResults.state}</h6>
                      </div>
                      <hr></hr>
                      <Row style = {{textAlign: "left"}}>
                          <Col md={9}>
                            <img style = {{width: "100%"}} src={require('../img/img_2.jpg')}/>
                          </Col>
                          <Col md={3}>
                            <span><b>Amenities</b></span>
                            <br></br>
                            <div>
                            { filteredResults.dogs_allowed ?
                                (<span>Dogs: Yes</span>) : (<span>Dogs: No</span>)
                            }
                            <br></br>
                            { filteredResults.cats_allowed ?
                                (<span>Cats: Yes</span>) : (<span>Cats: No</span>)
                            }
                            <br></br>
                            { filteredResults.washer_dryer ?
                                (<span>Washer/Dryer: Yes</span>) : (<span>Washer/Dryer: No</span>)
                            }
                            <br></br>
                            { filteredResults.garage ?
                                (<span>Garage: Yes</span>) : (<span>Garage: No</span>)
                            }
                            <br></br>
                            { filteredResults.swimming_pool ?
                                (<span>Pool: Yes</span>) : (<span>Pool: No</span>)
                            }
                            <br></br>
                            { filteredResults.parking_lot ?
                                (<span>Parking Lot: Yes</span>) : (<span>Parking Lot: No</span>)
                            }
                            </div>
                          </Col>
                      </Row>
                  </Card>
              </CardDeck>
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
            <Container>
                <h2>Search for a property</h2>

            </Container>
            <Form>
              <FormControl type="text" onChange={this.handleChange} placeholder="Enter a city" />
            </Form>
              {this.filterSearch()}
          </Container>
        )
    }
}
export default Search
