import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Nav } from 'react-bootstrap';
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
    this.onChangePropertyPets = this.onChangePropertyPets.bind(this);
    this.onChangePropertyLaundry = this.onChangePropertyLaundry.bind(this);
    this.onChangePropertyParking = this.onChangePropertyParking.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      property_name: "",
      city: "",
      state: "",
      zipCode: "",
      bedrooms: 0,
      bathrooms: 0,
      pets_allowed: "",
      laundry: "",
      parking: ""
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
  onChangePropertyPets(event) {
    this.setState({
      pets_allowed: event.target.value
    });
  }
  onChangePropertyLaundry(event) {
    this.setState({
      laundry: event.target.value
    });
  }
  onChangePropertyParking(event) {
    this.setState({
      parking: event.target.value
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
      pets_allowed: this.state.pets_allowed,
      laundry: this.state.laundry,
      parking: this.state.parking
    };

    axios.post("http://localhost:5001/property/newListing", propertyPOST)
      .then(res => console.log(res.data));
  }

  render() {
    return(
      <Container>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">

            <div className="form-group">
              <label> Property Name </label>
              <input type="text" className="form-control" placeholder="Name" value={this.state.property_name} onChange={this.onChangePropertyName}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> City </label>
              <input type="text" className="form-control" placeholder="City" value={this.state.city} onChange={this.onChangePropertyCity}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> State </label>
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
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> Zip Code </label>
              <input type="text" className="form-control" placeholder="Zip Code" value={this.state.zipCode} onChange={this.onChangePropertyZipCode}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> Number of Bedrooms </label>
              <input type="text" className="form-control" placeholder="Bedrooms" value={this.state.bedrooms} onChange={this.onChangePropertyBedrooms}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> Number of Bathrooms </label>
              <input type="text" className="form-control" placeholder="Bathrooms" value={this.state.bathrooms} onChange={this.onChangePropertyBathrooms}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> Types of Pets Allowed </label>
              <input type="text" className="form-control" placeholder="Pets allowed" value={this.state.pets_allowed} onChange={this.onChangePropertyPets}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> Laundry Type </label>
              <input type="text" className="form-control" placeholder="Laundry type" value={this.state.laundry} onChange={this.onChangePropertyLaundry}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label> Parking Type </label>
              <input type="text" className="form-control" placeholder="Parking type" value={this.state.parking} onChange={this.onChangePropertyParking}/>
            </div>
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
