import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Nav, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class NewListing extends Component {

    constructor(props) {
        super(props);

        this.onChangePropertyName = this.onChangePropertyName.bind(this);
        this.onChangePropertyCity = this.onChangePropertyCity.bind(this);
        this.onChangePropertyState = this.onChangePropertyState.bind(this);
        this.onChangePropertyZipCode = this.onChangePropertyZipCode.bind(this);
        this.onChangePropertyBedrooms = this.onChangePropertyBedrooms.bind(this);
        this.onChangePropertyBathrooms = this.onChangePropertyBathrooms.bind(this);
        this.onChangePropertyPrice = this.onChangePropertyPrice.bind(this);
        this.onChangePropertyDogs = this.onChangePropertyDogs.bind(this);
        this.onChangePropertyCats = this.onChangePropertyCats.bind(this);
        this.onChangePropertyLaundry = this.onChangePropertyLaundry.bind(this);
        this.onChangePropertyGarage = this.onChangePropertyGarage.bind(this);
        this.onChangePropertyPool = this.onChangePropertyPool.bind(this);
        this.onChangePropertyParkingLot = this.onChangePropertyParkingLot.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            property_name: "",
            city: "",
            state: "",
            zipCode: "",
            bedrooms: 0,
            bathrooms: 0,
            price: 0,
            dogs_allowed: false,
            cats_allowed: false,
            washer_dryer: false,
            garage: false,
            swimming_pool: false,
            parking_lot: false
        }
    }

    onChangePropertyName(event) {
        this.setState({
            property_name: event.target.value
        });
    }

    onChangePropertyCity(event) {
        this.setState({
            city: event.target.value
        });
    }
    onChangePropertyState(event) {
        this.setState({
            state: event.target.value
        });
    }
    onChangePropertyZipCode(event) {
        this.setState({
            zipCode: event.target.value
        });
    }
    onChangePropertyBedrooms(event) {
        this.setState({
            bedrooms: event.target.value
        });
    }
    onChangePropertyBathrooms(event) {
        this.setState({
            bathrooms: event.target.value
        });
    }
    onChangePropertyPrice(event) {
        this.setState({
            price: event.target.value
        });
    }
    onChangePropertyDogs(event) {
        this.setState({
            dogs_allowed: event.target.checked
        });
    }
    onChangePropertyCats(event) {
        this.setState({
            cats_allowed: event.target.checked
        });
    }
    onChangePropertyLaundry(event) {
        this.setState({
            washer_dryer: event.target.checked
        });
    }
    onChangePropertyGarage(event) {
        this.setState({
            garage: event.target.checked
        });
    }
    onChangePropertyPool(event) {
        this.setState({
            swimming_pool: event.target.checked
        });
    }
    onChangePropertyParkingLot(event) {
        this.setState({
            parking_lot: event.target.checked
        });
    }

    onSubmit(event){
        event.preventDefault();

        const propertyPOST = {
            property_name: this.state.property_name,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            bedrooms: this.state.bedrooms,
            bathrooms: this.state.bathrooms,
            price: this.state.price,
            dogs_allowed: this.state.dogs_allowed,
            cats_allowed: this.state.cats_allowed,
            washer_dryer: this.state.washer_dryer,
            garage: this.state.garage,
            swimming_pool: this.state.swimming_pool,
            parking_lot: this.state.parking_lot
        };

        axios.post("http://localhost:5001/property/newListing", propertyPOST)
          .then(res => console.log(res.data));
    }

    render() {
        return(
            <Container>
                <form onSubmit={this.onSubmit} style={{textAlign: "left", marginTop: "3em"}}>

                    <h3>Property Information</h3>
                    <br></br>

                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Property Name <br></br>(if applicable) </label>
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Name" value={this.state.property_name} onChange={this.onChangePropertyName}/>
                            </Col>
                        </Row>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> City </label>
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="City" value={this.state.city} onChange={this.onChangePropertyCity}/>
                            </Col>
                        </Row>
                    </div>
                    <br></br>
                    <div className="form-row">
                      <Row style={{width: "40%"}}>
                          <Col md={6}>
                              <label> State </label>
                          </Col>
                          <Col>
                              <select className="form-control" placeholder="State" value={this.state.State} onChange={this.onChangePropertyState}>
                                  <option>Choose...</option>
                                  <option>AL - Alabama</option>
                                  <option>AK - Alaska</option>
                                  <option>AZ - Arizona</option>
                                  <option>AR - Arkansas</option>
                                  <option>CA - California</option>
                                  <option>CO - Colarado</option>
                                  <option>CT - Connecticut</option>
                                  <option>DE - Delaware</option>
                                  <option>FL - Florida</option>
                                  <option>GA - Georgia</option>
                                  <option>HI - Hawaii</option>
                                  <option>ID - Idaho</option>
                                  <option>IL - Illinois</option>
                                  <option>IN - Indiana</option>
                                  <option>IA - Iowa</option>
                                  <option>KS - Kansas</option>
                                  <option>KY - Kentucky</option>
                                  <option>LA - Louisiana</option>
                                  <option>ME - Maine</option>
                                  <option>MD - Maryland</option>
                                  <option>MA - Massachusetts</option>
                                  <option>MI - Michigan</option>
                                  <option>MN - Minnesota</option>
                                  <option>MS - Mississippi</option>
                                  <option>MO - Missouri</option>
                                  <option>MT - Montana</option>
                                  <option>NE - Nebraska</option>
                                  <option>NV - Nevada</option>
                                  <option>NH - New Hampshire</option>
                                  <option>NJ - New Jersey</option>
                                  <option>NM - New Mexico</option>
                                  <option>NY - New York</option>
                                  <option>NC - North Carolina</option>
                                  <option>ND - North Dakota</option>
                                  <option>OH - Ohio</option>
                                  <option>OK - Oklahoma</option>
                                  <option>OR - Oregon</option>
                                  <option>PA - Pennsylvania</option>
                                  <option>RI - Rhode Island</option>
                                  <option>SC - South Carolina</option>
                                  <option>SD - South Dakota</option>
                                  <option>TN - Tennessee</option>
                                  <option>TX - Texas</option>
                                  <option>UT - Utah</option>
                                  <option>VT - Vermont</option>
                                  <option>VA - Virginia</option>
                                  <option>WA - Washington</option>
                                  <option>WV - West Virginia</option>
                                  <option>WI - Wisconsin</option>
                                  <option>WY - Wyoming</option>
                              </select>
                          </Col>
                      </Row>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Zip Code </label>
                            </Col>
                              <Col>
                                <input type="text" className="form-control" placeholder="Zip Code" value={this.state.zipCode} onChange={this.onChangePropertyZipCode}/>
                            </Col>
                        </Row>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Number of Bedrooms </label>
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Bedrooms" value={this.state.bedrooms} onChange={this.onChangePropertyBedrooms}/>
                            </Col>
                        </Row>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Number of Bathrooms </label>
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Bathrooms" value={this.state.bathrooms} onChange={this.onChangePropertyBathrooms}/>
                            </Col>
                        </Row>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Price </label>
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Price" value={this.state.price} onChange={this.onChangePropertyPrice}/>
                            </Col>
                        </Row>
                    </div>

                    <br></br>

                    <h3>Amenities</h3>

                    <br></br>

                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Dogs  Allowed </label>
                            </Col>
                            <Col>
                                <input type="checkbox" className="form-control" checked={this.state.dogs_allowed} onChange={this.onChangePropertyDogs}/>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Cats Allowed </label>
                            </Col>
                            <Col>
                                <input type="checkbox" className="form-control"nchecked={this.state.cats_allowed} onChange={this.onChangePropertyCats}/>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Washer / Dryer </label>
                            </Col>
                            <Col>
                                <input type="checkbox" className="form-control" checked={this.state.washer_dryer} onChange={this.onChangePropertyLaundry}/>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Parking Garage </label>
                            </Col>
                            <Col>
                                <input type="checkbox" className="form-control" checked={this.state.garage} onChange={this.onChangePropertyGarage}/>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label>  Swimming Pool </label>
                            </Col>
                            <Col>
                                <input type="checkbox" className="form-control" checked={this.state.swimming_pool} onChange={this.onChangePropertyPool}/>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-row">
                        <Row style={{width: "40%"}}>
                            <Col md={6}>
                                <label> Parking Lot </label>
                            </Col>
                            <Col>
                                <input type="checkbox" className="form-control"  checked={this.state.parking_lot} onChange={this.onChangePropertyParkingLot}/>
                            </Col>
                        </Row>
                    </div>

                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">List Property</button>
                    </div>

                </form>
            </Container>
        )
    }
}

export default NewListing
