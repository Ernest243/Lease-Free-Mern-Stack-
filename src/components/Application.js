import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import axios from 'axios';

class Application extends Component {
    
    constructor() {

        super();

       

        this.state = {
            // Fields concerning the property
            currentDay: '',
            expectedMoveInDate: '',
            propertyAddress: '',
            monthlyRent: '',
            securityDeposit: '',

            // Fields concerning the customer
            applicantFirst: '',
            applicantMidInitial: '',
            applicantLast: '',
            applicantNumber: '',
            applicantDOB: '',
            applicantSSN: '', 
            applicantDL: '',
            applicantMonthlyInc: '',
            applicantPosition: '', 

            // Fields concerning co-applicant
            coFirst: '',
            coLast: '',
            coPosition: '', 
            coMonthlyInc: '',
            coPhoneNumber: '',
            coEmail: ''
        }
    }

    render() {
        return (
            <div className="container">
            <br /><br />
            
            <h1><Badge variant="secondary">Application</Badge></h1><br></br>

            {/* First row */}
            <form className="myLabel" onSubmit={this.onSubmit}> 
                <div className="form-row">
                    <div className="form-goup col-md-4">
                        <label>Current date</label>
                        <input type="date" className="form-control" required
                            value={this.state.currentDay} 
                            onChange={this.onChangeCurrentDay}
                            />
                    </div>
                    <div className="form-goup col-md-4">
                        <label>Move-In date</label>
                        <input type="date" className="form-control" required
                            value={this.state.expectedMoveInDate} 
                            onChange={this.onChangeExpDate}
                            />
                    </div>
                    <div className="form-goup col-md-4">
                        <label>Property Address</label>
                        <input type="text" className="form-control" required placeholder="Address"
                            value={this.state.propertyAddress} 
                            onChange={this.onChangePropAddress}
                        />
                    </div>
                </div><br />
                <div className="form-row"></div>

                {/* Second row */}
                <div className="form-row">
                    <div className="form-goup col-md-6">
                    <label>Monthly rent</label>
                        <input type="text" className="form-control" placeholder="Monthly rent"
                            value={this.state.monthlyRent} 
                            onChange={this.onChangeMonthRent}
                            />
                    </div>
                    <div className="form-goup col-md-6">
                    <label>Deposit amount</label>
                        <input type="text" className="form-control" placeholder="Deposit amount"
                            value={this.state.securityDeposit} 
                            onChange={this.onChangeSecDepot}
                            />
                    </div>
                  
                </div><br></br>

                  {/* Third row */}
                  <div className="form-row">
                    <div className="form-goup col-md-3">
                    <label>First name</label>
                        <input type="text" className="form-control" placeholder="Enter first name"
                            value={this.state.applicantFirst} 
                            onChange={this.onChangeFirst}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                    <label>Middle initial</label>
                        <input type="text" className="form-control" maxlength="1" placeholder="Middle initial"
                            value={this.state.applicantMidInitial} 
                            onChange={this.onChangeMidInit}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                    <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name"
                            value={this.state.applicantLast} 
                            onChange={this.onChangeLast}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                    <label>Phone number</label>
                        <input type="text" className="form-control" placeholder="Phone number"
                            value={this.state.applicantNumber} 
                            onChange={this.onChangeNumber}
                            />
                    </div>
                  
                </div>
                <br></br>

                   {/* Fourth row */}
                   <div className="form-row">
                    <div className="form-goup col-md-3">
                    <label>DOB</label>
                        <input type="date" className="form-control" placeholder="Birthdate"
                            value={this.state.applicantDOB} 
                            onChange={this.onChangeDOB}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                    <label>SSN</label>
                        <input type="number" className="form-control" maxlength="1" placeholder="Social security number"
                            value={this.state.applicantSSN} 
                            onChange={this.onChangeSSN}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                    <label>Driver License</label>
                        <input type="text" className="form-control" placeholder="Driver license"
                            value={this.state.applicantDL} 
                            onChange={this.onChangeDL}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                    <label>Monthly income</label>
                        <input type="number" className="form-control" placeholder="Monthly income"
                            value={this.state.applicantMonthlyInc} 
                            onChange={this.onChangeMonthInc}
                            />
                    </div>

                    {/* Fifth */}
                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <label>Job</label>
                        <input type="text" className="form-control" placeholder="Job position"
                            value={this.state.applicantPosition} 
                            onChange={this.onChangePosition}
                            />
                        </div>
                    </div>
                  
                </div>

                {/* Sixth row */}
                <div className="form-row">
                    <div className="form-goup col-md-3">
                     <label>First name</label>
                        <input type="text" className="form-control" placeholder="Co-applicant first name"
                            value={this.state.coFirst} 
                            onChange={this.onChangeCoFirst}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                     <label>Last name</label>
                        <input type="text" className="form-control" maxlength="1" placeholder="Co-applicant last name"
                            value={this.state.coLast} 
                            onChange={this.onChangeCoLast}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                        <label>Job</label>
                        <input type="text" className="form-control" placeholder="Co-applicant job position"
                            value={this.state.coPosition} 
                            onChange={this.onChangeCoPos}
                            />
                    </div>
                    <div className="form-goup col-md-3">
                      <label>Monthly income</label>
                        <input type="number" className="form-control" placeholder="Co-applicant monthly income"
                            value={this.state.coMonthlyInc} 
                            onChange={this.onChangeCoMonthInc}
                            />
                    </div> 
                    
                </div><br></br>

                {/* Seventh row */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Phone number</label>
                        <input type="number" className="form-control" placeholder="Co-applicant phone number"
                            value={this.state.coPhoneNumber} 
                            onChange={this.onChangeCoNumber}
                            />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Co-applicant email"
                            value={this.state.coEmail} 
                            onChange={this.onChangeCoEmail}
                            />
                    </div>
                </div>

                    <div className="form-group">
                        <button type="submit" style={{marginRight: "30px"}} className="btn btn-primary">Apply</button>
                        <Link to ="/dashboard" href="#link" className="myLink"><ins>Cancel</ins></Link>
                    </div>
               
            </form>
        </div>
        )
    }
}


export default Application;