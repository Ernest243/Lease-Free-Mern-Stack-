import React, { Component } from 'react';
import '../App.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class SignUp extends Component{

    

    constructor(props) 
    {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: '',
            addressUser: '',
            cityUser: '', 
            stateUser: '', 
            zipCodeUser: '', 
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeAddressUser = this.onChangeAddressUser.bind(this);
        this.onChangeCityUser = this.onChangeCityUser.bind(this);
        this.onChangeStateUser = this.onChangeStateUser.bind(this);
        this.onChangeZipCodeUser = this.onChangeZipCodeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        });
    }

    onChangelastName(e){
        this.setState({
            lastName: e.target.value
        });
    }

    onChangePhoneNumber(e){
        this.setState({
            phoneNumber: e.target.value
        });
    }

    onChangeEmailAddress(e){
        this.setState({
            emailAddress: e.target.value
        });
    }

    onChangeAddressUser(e){
        this.setState({
            addressUser: e.target.value
        });
    }

    onChangeCityUser(e){
        this.setState({
            cityUser: e.target.value
        });
    }

    onChangeStateUser(e){
        this.setState({
            stateUser: e.target.value
        });
    }

    onChangeZipCodeUser(e){
        this.setState({
            zipCodeUser: e.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();

        console.log(`Form Submitted: `);
        console.log(`First Name: ${this.state.firstName}`)
        console.log(`Last Name: ${this.state.lastName}`)
        console.log(`Phone Number: ${this.state.phoneNumber}`)
        console.log(`Email Address: ${this.state.emailAddress}`)
        console.log(`Address: ${this.state.addressUser}`)
        console.log(`City: ${this.state.cityUser}`)
        console.log(`State: ${this.state.stateUser}`)
        console.log(`Zip code: ${this.state.zipCodeUser}`)


        this.setState = (
            {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                emailAddress: '',
                addressUser: '',
                cityUser: '', 
                stateUser: 'Choose...', 
                zipCodeUser: ''
        })

        console.log(`Form Submitted: `);
        console.log(`First Name: ${this.state.firstName}`)
        console.log(`Last Name: ${this.state.lastName}`)
        console.log(`Phone Number: ${this.state.phoneNumber}`)
        console.log(`Email Address: ${this.state.emailAddress}`)
        console.log(`Address: ${this.state.addressUser}`)
        console.log(`City: ${this.state.cityUser}`)
        console.log(`State: ${this.state.stateUser}`)
        console.log(`Zip code: ${this.state.zipCodeUser}`)

    }

  

    render() 
    {
        return (
            <div className="container">
                <br /><br />
                <form className="myLabel" onSubmit={this.onSubmit}> 
                    <div className="form-row">
                        <div className="form-goup col-md-4">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name"
                                value={this.state.firstName} 
                                onChange={this.onChangeFirstName}
                                />
                        </div>
                        <div className="form-goup col-md-4">
                            <label>Last Name</label>
                            <input type="text" className="form-control" required placeholder="Last Name" 
                                value={this.state.lastName} 
                                onChange={this.onChangelastName}
                                />
                        </div>
                        <div className="form-goup col-md-4">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" required placeholder="Phone Number"
                                value={this.state.phoneNumber} 
                                onChange={this.onChangePhoneNumber}
                            />
                        </div>
                    </div><br />
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" required placeholder="Email Address"
                            value={this.state.emailAddress} 
                            onChange={this.onChangeEmailAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" required placeholder="Address"
                            value={this.state.addressUser} 
                            onChange={this.onChangeAddressUser}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-goup col-md-4">
                            <label>City</label>
                            <input type="text" className="form-control" required placeholder="City"
                                value={this.state.cityUser} 
                                onChange={this.onChangeCityUser}
                            />
                        </div>
                        <div className="form-goup col-md-4" >
                            <label>State</label>
                            <select className="form-control" value={this.state.stateUser} onChange={this.onChangeStateUser} required> 
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
                        <div className="form-goup col-md-4">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" required placeholder="Zip Code"
                                value={this.state.zipCodeUser} 
                                onChange={this.onChangeZipCodeUser}
                            />
                        </div>
                    </div><br />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Sign up</button>
                        </div>
                    <div className="form-group">
                        <Link to ="/residentPortal" href="#link" className="myLink"><ins>Already have an account? Log in!</ins></Link>
                    </div>
                </form>
            </div>
    
        )

    }
}

export default SignUp;