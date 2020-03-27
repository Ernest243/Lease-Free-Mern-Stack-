import React, { Component } from 'react';
import { Form, Button, Container, Nav } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

class LogIn extends Component 
{

     constructor(props)
    {
        super(props);

        this.state = {
            emailAddress: " ",
            passwordUser: " ",
        }
    }

    render() 
    {
        return (

            <Container >
                <br /><br /><br /><br /><br /><br /><br />
                <Form style={{width: '50%'}}>
                    <Form.Group controlId="formBasicEmail" className="myLabel"> 
                        <Form.Label >Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter your email"/>
                        <Form.Text className="text-muted">
                            
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="myLabel">
                        <Form.Label >Password</Form.Label>
                        <Form.Control  type="password" placeholder="Password"/>
                    </Form.Group>

                    <Form.Group className="myLabel">
                        <Link to="/signUp"><Nav.Link href="#link" className="myLink"><ins>Don't have an account? Sign up!</ins></Nav.Link></Link>
                        <Button variant="primary" type="submit">
                            Log in
                        </Button>
                    </Form.Group>
                    
                  
                </Form>
            </Container>
        )
    }  


}

export default LogIn;