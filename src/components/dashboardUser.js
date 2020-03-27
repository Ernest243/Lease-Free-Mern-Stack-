import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button, Card, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

class Dashboard extends Component 
{
  constructor(props) {
      super(props);

      this.state = {
        userFirst: '',
        userLast: ''
    }
  } 

  render() {
    return (
       
        <div>
        
            
            <Container style={{ marginTop: 100}}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={require('../img/help.png')} style={{ width: 100}}/>
                            <Card.Body>
                                <Card.Title>Submit Request</Card.Title>
                                <Button variant="primary">Open</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={require('../img/info.png')} style={{ width: 100}} />
                            <Card.Body>
                                <Card.Title>Lease Information</Card.Title>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={require('../img/contact.png')} style={{ width: 100}}/>
                            <Card.Body>
                                <Card.Title>Contact Office</Card.Title>
                                <Button variant="primary">Contact Us</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}
 
}




export default Dashboard;